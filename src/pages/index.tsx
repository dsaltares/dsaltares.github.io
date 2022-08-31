import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadata, type PostMetadata } from '@lib/posts';

type HomeProps = {
  posts: PostMetadata[];
};

const Home: NextPage<HomeProps> = ({ posts }) => (
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadata(),
  },
});

export default Home;
