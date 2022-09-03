import type { GetStaticProps, NextPage } from 'next';
import { getCategories } from '@lib/posts';
import Layout from '@components/Layout';
import CategoryList from '@components/CategoryList';

type CategoriesPageProps = {
  categories: string[];
};

const CategoriesPage: NextPage<CategoriesPageProps> = ({ categories }) => (
  <Layout>
    <h1 className="mb-2 text-primary text-4xl font-bold ">Categories</h1>
    <CategoryList categories={categories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    categories: getCategories(),
  },
});

export default CategoriesPage;
