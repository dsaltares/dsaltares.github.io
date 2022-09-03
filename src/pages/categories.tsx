import type { GetStaticProps, NextPage } from 'next';
import { getCategories } from '@lib/posts';
import Layout from '@components/Layout';
import TaxonomyList from '@components/TaxonomyList';
import { categoryToHref } from '@lib/href';
import type { TaxonomyItem } from '@lib/types';

type CategoriesPageProps = {
  items: TaxonomyItem[];
};

const CategoriesPage: NextPage<CategoriesPageProps> = ({ items }) => (
  <Layout>
    <h1 className="mb-2 text-primary text-4xl font-bold ">Categories</h1>
    <TaxonomyList items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    items: getCategories().map(({ label, date }) => ({
      label,
      href: categoryToHref(label),
      date,
    })),
  },
});

export default CategoriesPage;
