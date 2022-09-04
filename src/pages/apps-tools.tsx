import type { GetStaticProps, NextPage } from 'next';
import { getPostsMetadataFromFolder, type PostMetadata } from '@lib/posts';
import PostTitleListPage from '@components/PostTitleListPage';

type AppsToolsPageProps = {
  posts: PostMetadata[];
};

const AppsToolsPage: NextPage<AppsToolsPageProps> = ({ posts }) => (
  <PostTitleListPage title={'Apps & tools'} posts={posts} />
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPostsMetadataFromFolder('apps & tools'),
  },
});

export default AppsToolsPage;
