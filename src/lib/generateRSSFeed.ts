import { writeFileSync } from 'fs';
import RSS from 'rss';
import Config from './config';
import type { PostMetadata } from './posts';

const generateRSSFeed = (posts: PostMetadata[]) => {
  const feed = new RSS({
    title: Config.title,
    description: Config.description,
    site_url: Config.url,
    feed_url: `${Config.url}/index.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
  });

  posts.slice(0, Config.postsPerPage).forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `${Config.url}/${post.slug}`,
      date: post.date,
    });
  });

  writeFileSync('./public/index.xml', feed.xml({ indent: true }));
};

export default generateRSSFeed;
