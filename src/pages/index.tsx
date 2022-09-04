import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPostsMetadata, type PostMetadata } from '@lib/posts';
import Layout from '@components/Layout';
import Config from '@lib/config';
import PostList from '@components/PostList';
import generateRSSFeed from '@lib/generateRSSFeed';
import Pagination from '@components/Pagination';

type HomePageProps = {
  posts: PostMetadata[];
  pages: number;
};

const HomePage: NextPage<HomePageProps> = ({ posts, pages }) => (
  <Layout>
    <Head>
      <link
        href={`${Config.url}/index.xml`}
        rel="alternate"
        type="application/rss+xml"
        title={`${Config.title} · ${Config.description}`}
      />
    </Head>
    <PostList posts={posts} />
    <Pagination current={1} total={pages} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsMetadata();

  generateRSSFeed(posts);

  return {
    props: {
      posts: posts.slice(0, Config.postsPerPage),
      pages: Math.ceil(posts.length / Config.postsPerPage),
    },
  };
};

export default HomePage;
