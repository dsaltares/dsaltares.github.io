import type { PostMetadata } from '@lib/posts';
import Layout from './Layout';
import PostTitleList from './PostTitleList';

type PostTitleListPageProps = {
  posts: PostMetadata[];
  title: string;
};

const PostTitleListPage = ({ title, posts }: PostTitleListPageProps) => (
  <Layout>
    <h1 className="mb-2 text-primary text-4xl font-bold ">{title}</h1>
    <PostTitleList posts={posts} />
  </Layout>
);

export default PostTitleListPage;
