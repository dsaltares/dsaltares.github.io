import { writeFileSync } from 'fs';
import RSS from 'rss';
import Config from './config';
import type { PostMetadata } from './posts';

const generateRSSFeed = (posts: PostMetadata[]) => {
  const feed = new RSS({
    title: Config.title,
    description: Config.description,
    managingEditor: Config.author,
    webMaster: Config.author,
    site_url: Config.url,
    feed_url: `${Config.url}/index.xml`,
    image_url: `${Config.url}/img/favicon.png`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, David Saltares`,
    custom_namespaces: { media: 'http://search.yahoo.com/mrss/' },
  });

  posts.slice(0, Config.postsPerPage).forEach((post) => {
    const customElements = post.banner
      ? [
          {
            'media:content': {
              _attr: {
                url: `${Config.url}${post.banner}`,
                type: 'image/*',
              },
            },
          },
        ]
      : undefined;

    feed.item({
      title: post.title,
      description: post.description || '',
      url: `${Config.url}/${post.slug}`,
      date: post.date,
      custom_elements: customElements,
    });
  });

  writeFileSync('./public/index.xml', feed.xml({ indent: true }));
};

export default generateRSSFeed;
