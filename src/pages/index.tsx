import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadata, type PostMetadata } from '@lib/posts';
import Layout from '@components/Layout';
import Config from '@lib/config';
import PostList from '@components/PostList';
import generateRSSFeed from '@lib/generateRSSFeed';

type HomePageProps = {
  posts: PostMetadata[];
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => (
  <Layout>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsMetadata();

  generateRSSFeed(posts);

  return {
    props: {
      posts: posts.slice(0, Config.postsPerPage),
    },
  };
};

export default HomePage;
