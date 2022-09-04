import Head from 'next/head';
import Config from '@lib/config';
import type { TaxonomyItem } from '@lib/types';
import Layout from './Layout';
import TaxonomyList from './TaxonomyList';

type TaxonomyPageProps = {
  title: string;
  items: TaxonomyItem[];
};

const TaxonomyPage = ({ title, items }: TaxonomyPageProps) => (
  <Layout>
    <Head>
      <title>{`${title} · ${Config.title}`}</title>
    </Head>
    <h1 className="mb-2 text-primary text-4xl font-bold ">{title}</h1>
    <TaxonomyList items={items} />
  </Layout>
);

export default TaxonomyPage;
