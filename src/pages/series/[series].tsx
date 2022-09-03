import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getPostsMetadataBySeries,
  getSeriesSlugs,
  type PostMetadata,
} from '@lib/posts';
import PostTitleListPage from '@components/PostTitleListPage';

type SeriesPageProps = {
  posts: PostMetadata[];
  series: string;
};

const SeriesPage: NextPage<SeriesPageProps> = ({ series, posts }) => (
  <PostTitleListPage title={series} posts={posts} />
);

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getSeriesSlugs().map((series) => ({ params: { series } })),
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const series = params?.series as string;
  const posts = getPostsMetadataBySeries(series);

  if (posts.length === 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const seriesName = posts[0].series;

  return {
    props: {
      posts,
      series: seriesName,
    },
  };
};

export default SeriesPage;
