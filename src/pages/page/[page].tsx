import type { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/Layout';
import { type PostMetadata, getPostsMetadata } from '@lib/posts';
import Config from '@lib/config';
import PostList from '@components/PostList';
import Pagination from '@components/Pagination';

type PaginatedPostsPageProps = {
  posts: PostMetadata[];
  pages: number;
  current: number;
};

const PaginatedPostsPage = ({
  posts,
  pages,
  current,
}: PaginatedPostsPageProps) => (
  <Layout>
    <PostList posts={posts} />
    <Pagination current={current} total={pages} />
  </Layout>
);

export default PaginatedPostsPage;

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: Array.from(
    Array(Math.ceil(getPostsMetadata().length / Config.postsPerPage)).keys()
  ).map((page) => ({ params: { page: (page + 1).toString() } })),
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string, 10);
  const posts = getPostsMetadata();
  const pages = Math.ceil(posts.length / Config.postsPerPage);

  if (page < 0 || page > pages) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const startIdx = (page - 1) * Config.postsPerPage;
  const endIdx = startIdx + Config.postsPerPage;

  return {
    props: {
      current: page,
      pages,
      posts: posts.slice(startIdx, endIdx),
    },
  };
};
