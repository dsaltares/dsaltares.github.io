import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import isFuture from 'date-fns/isFuture';
import { titleToSlug } from './href';
import Config from './config';

const PostsPath = './content/post';

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
    .map((file) => {
      const content = fs.readFileSync(path.join(PostsPath, file), 'utf8');
      const frontMatter = matter(content);
      return {
        path: file,
        title: frontMatter.data.title as string,
        date: new Date(frontMatter.data.date).toISOString(),
        categories: (frontMatter.data.categories || []) as string[],
        description: (frontMatter.data.description || null) as string | null,
        slug: titleToSlug(frontMatter.data.title),
        readingTime: readingTime(content).text,
        draft: (frontMatter.data.draft || false) as boolean,
      };
    })
    .filter((post) => {
      if (!Config.includeFuture && isFuture(new Date(post.date))) {
        return false;
      }
      if (!Config.includeDrafts && post.draft) {
        return false;
      }
      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
