import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import isFuture from 'date-fns/isFuture';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkPrism from 'remark-prism';
import { slugify } from './href';
import Config from './config';

const ContentPath = './content';
const PostsPath = path.join(ContentPath, 'post');
const SupportedExtensions = ['.md', '.mdx'];

export type PostMetadata = {
  path: string;
  title: string;
  date: string;
  categories: string[];
  description: string | null;
  slug: string;
  readingTime: string;
  draft: boolean;
};

export const getNumberOfPosts = () => fs.readdirSync(PostsPath).length;

export const getPostsMetadata = (): PostMetadata[] =>
  fs
    .readdirSync(PostsPath)
    .map((file) => path.join(PostsPath, file))
    .map(getPostMetadata)
    .filter(filterPost)
    .sort(byDateDescending);

export const getAllSlugs = () => getAllMetadata().map(({ slug }) => slug);

export const getPostMetadataBySlug = (slug: string) =>
  getAllMetadata().find((post) => post.slug === slug);

export const getPostSource = (file: string) =>
  serialize(fs.readFileSync(file, 'utf8'), {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkUnwrapImages, remarkPrism],
    },
  });

export const getCategories = () =>
  Array.from(
    new Set(
      getPostsMetadata()
        .map(({ categories }) => categories)
        .flat()
        .map(slugify)
    )
  );

export const getPostsMetadataByCategory = (category: string) =>
  getPostsMetadata().filter((post) =>
    post.categories.map(slugify).includes(category)
  );

const getAllMetadata = (): PostMetadata[] => getAllFiles().map(getPostMetadata);

const getAllFiles = (): string[] => {
  const queue = [ContentPath];
  const files: string[] = [];

  while (queue.length > 0) {
    const file = queue.pop() as string;
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      fs.readdirSync(file).forEach((child) => {
        queue.push(path.join(file, child));
      });
    } else if (SupportedExtensions.includes(path.extname(file))) {
      files.push(file);
    }
  }

  return files;
};

const getPostMetadata = (file: string) => {
  const content = fs.readFileSync(file, 'utf8');
  const frontMatter = matter(content);
  return {
    path: file,
    title: frontMatter.data.title as string,
    date: new Date(frontMatter.data.date).toISOString(),
    categories: (frontMatter.data.categories || []) as string[],
    description: (frontMatter.data.description || null) as string | null,
    slug: slugify(frontMatter.data.title),
    readingTime: readingTime(content).text,
    draft: (frontMatter.data.draft || false) as boolean,
  };
};

const filterPost = (post: PostMetadata) => {
  if (!Config.includeFuture && isFuture(new Date(post.date))) {
    return false;
  }
  if (!Config.includeDrafts && post.draft) {
    return false;
  }
  return true;
};

const byDateDescending = (a: PostMetadata, b: PostMetadata) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
