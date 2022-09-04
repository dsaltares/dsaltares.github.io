import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadataFromFolder, type PostMetadata } from '@lib/posts';
import PostTitleListPage from '@components/PostTitleListPage';

type GamesPageProps = {
  posts: PostMetadata[];
};

const GamesPage: NextPage<GamesPageProps> = ({ posts }) => (
  <PostTitleListPage title="Games" posts={posts} />
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadataFromFolder('games'),
  },
});

export default GamesPage;
