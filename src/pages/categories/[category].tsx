import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getCategorySlugs,
  getPostsMetadataByCategory,
  type PostMetadata,
} from '@lib/posts';
import { slugify } from '@lib/href';
import PostTitleListPage from '@components/PostTitleListPage';

type CategoryPageProps = {
  posts: PostMetadata[];
  category: string;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category, posts }) => (
  <PostTitleListPage title={category} posts={posts} />
);

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getCategorySlugs().map((category) => ({ params: { category } })),
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const posts = getPostsMetadataByCategory(category);

  if (posts.length === 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const categoryIdx = posts[0].categories.findIndex(
    (c) => slugify(c) === category
  );
  const categoryName = posts[0].categories[categoryIdx];

  return {
    props: {
      posts,
      category: categoryName,
    },
  };
};

export default CategoryPage;
