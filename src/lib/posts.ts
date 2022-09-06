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
import type { TaxonomyWithDate } from './types';

const ContentPath = './content';
const PostsPath = path.join(ContentPath, 'post');
const SupportedExtensions = ['.md', '.mdx'];

let PostMetadataCache: PostMetadata[] | undefined;
let AllMetadataCache: PostMetadata[] | undefined;
const FolderMetadataCache: { [key: string]: PostMetadata[] } = {};

export type PostMetadata = {
  path: string;
  title: string;
  date: string;
  categories: string[];
  series: string | null;
  description: string | null;
  slug: string;
  readingTime: string;
  draft: boolean;
  disableComments: boolean;
  keywords: string[];
  banner: string | null;
};

export const getPostsMetadata = (): PostMetadata[] => {
  if (Config.useCache && PostMetadataCache) {
    return PostMetadataCache;
  }

  PostMetadataCache = fs
    .readdirSync(PostsPath)
    .map((file) => path.join(PostsPath, file))
    .map(getPostMetadata)
    .filter(filterPost)
    .sort(byDateDescending);

  return PostMetadataCache!;
};

export const getPostsMetadataFromFolder = (folder: string): PostMetadata[] => {
  if (Config.useCache && FolderMetadataCache[folder]) {
    return FolderMetadataCache[folder];
  }

  FolderMetadataCache[folder] = fs
    .readdirSync(path.join(ContentPath, folder))
    .map((file) => path.join(path.join(ContentPath, folder), file))
    .map(getPostMetadata)
    .filter(filterPost)
    .sort(byDateDescending);

  return FolderMetadataCache[folder];
};

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
  Object.values(
    getPostsMetadata().reduce(
      (acc, { categories, date }) =>
        categories.reduce((acc, category) => {
          if (!acc[category] || acc[category].date < date) {
            return {
              ...acc,
              [category]: { label: category, date },
            };
          }
          return acc;
        }, acc),
      {} as { [key: string]: TaxonomyWithDate }
    )
  ).sort(byDateDescending);

export const getPostsMetadataByCategory = (category: string) =>
  getPostsMetadata().filter((post) =>
    post.categories.map(slugify).includes(category)
  );

export const getCategorySlugs = () =>
  getCategories().map(({ label }) => slugify(label));

export const getSeries = () =>
  Object.values(
    getPostsMetadata().reduce((acc, { series, date }) => {
      if (!series) {
        return acc;
      }
      if (!acc[series] || acc[series].date < date) {
        return {
          ...acc,
          [series]: { label: series, date },
        };
      }
      return acc;
    }, {} as { [key: string]: TaxonomyWithDate })
  ).sort(byDateDescending);

export const getSeriesSlugs = () =>
  getSeries().map(({ label }) => slugify(label));

export const getPostsMetadataBySeries = (series: string) =>
  getPostsMetadata().filter(
    (post) => post.series && slugify(post.series) === series
  );

export const getSeriesMetadata = (series: string) =>
  getPostsMetadata()
    .filter((post) => post.series === series)
    .sort(byDateAscending);

const getAllMetadata = (): PostMetadata[] => {
  if (Config.useCache && AllMetadataCache) {
    return AllMetadataCache;
  }

  AllMetadataCache = getAllFiles().map(getPostMetadata);

  return AllMetadataCache!;
};

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
    series: (frontMatter.data.series || null) as string | null,
    description: (frontMatter.data.description || null) as string | null,
    slug: slugify(frontMatter.data.title),
    readingTime: readingTime(content).text,
    draft: (frontMatter.data.draft || false) as boolean,
    disableComments: (frontMatter.data.disableComments || false) as boolean,
    keywords: (frontMatter.data.keywords || []) as string[],
    banner: (frontMatter.data.banner || null) as string | null,
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

const byDateDescending = <T extends { date: string }>(a: T, b: T) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const byDateAscending = <T extends { date: string }>(a: T, b: T) =>
  new Date(a.date).getTime() - new Date(b.date).getTime();
