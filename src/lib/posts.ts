import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { titleToHref } from './href';

const PostsPath = './content/post';

export type PostMetadata = {
  path: string;
  title: string;
  date: string;
  categories: string[];
  description: string | null;
  href: string;
  readingTime: string;
};

export const getNumberOfPosts = () => fs.readdirSync(PostsPath).length;

export const getPostsMetadata = (): PostMetadata[] =>
  fs
    .readdirSync(PostsPath)
    .map((file) => {
      const content = fs.readFileSync(path.join(PostsPath, file), 'utf8');
      const frontMatter = matter(content);
      return {
        path: file,
        title: frontMatter.data.title as string,
        date: new Date(frontMatter.data.date).toISOString(),
        categories: (frontMatter.data.categories || []) as string[],
        description: (frontMatter.data.description || null) as string | null,
        href: titleToHref(frontMatter.data.title),
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
