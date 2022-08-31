import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadata, type PostMetadata } from '@lib/posts';
import Layout from '@components/Layout';

type HomePageProps = {
  posts: PostMetadata[];
};

const HomePage: NextPage<HomePageProps> = ({ posts }) => (
  <Layout>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadata(),
  },
});

export default HomePage;
