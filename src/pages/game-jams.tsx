import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadataFromFolder, type PostMetadata } from '@lib/posts';
import PostTitleListPage from '@components/PostTitleListPage';

type GameJamsPageProps = {
  posts: PostMetadata[];
};

const GameJamsPage: NextPage<GameJamsPageProps> = ({ posts }) => (
  <PostTitleListPage title="Game jams" posts={posts} />
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadataFromFolder('game jams'),
  },
});

export default GameJamsPage;
