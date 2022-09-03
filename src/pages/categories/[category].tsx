import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getCategorySlugs,
  getPostsMetadataByCategory,
  type PostMetadata,
} from '@lib/posts';
import Layout from '@components/Layout';
import PostTitleList from '@components/PostTitleList';
import { slugify } from '@lib/href';

type CategoryPageProps = {
  posts: PostMetadata[];
  category: string;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category, posts }) => (
  <Layout>
    <h1 className="mb-2 text-primary text-4xl font-bold ">{category}</h1>
    <PostTitleList posts={posts} />
  </Layout>
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
      posts: getPostsMetadataByCategory(category),
      category: categoryName,
    },
  };
};

export default CategoryPage;
