import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadata, type PostMetadata } from '@lib/posts';
import Layout from '@components/Layout';
import Config from '@lib/config';
import PostList from '@components/PostList';

type HomePageProps = {
  posts: PostMetadata[];
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => (
  <Layout>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadata().slice(0, Config.postsPerPage),
  },
});

export default HomePage;
