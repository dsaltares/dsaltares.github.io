import type { GetStaticProps, NextPage } from 'next';
import { getSeries } from '@lib/posts';
import TaxonomyPage from '@components/TaxonomyPage';
import { seriesToHref } from '@lib/href';
import type { TaxonomyItem } from '@lib/types';

type SeriesListPageProps = {
  items: TaxonomyItem[];
};

const SeriesListPage: NextPage<SeriesListPageProps> = ({ items }) => (
  <TaxonomyPage title="Series" items={items} />
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    items: getSeries().map(({ label, date }) => ({
      label,
      date,
      href: seriesToHref(label),
    })),
  },
});

export default SeriesListPage;
