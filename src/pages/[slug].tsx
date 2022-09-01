import type { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/Layout';
import {
  getAllSlugs,
  getPostMetadataBySlug,
  type PostMetadata,
} from '@lib/posts';

type PostPageProps = {
  metadata: PostMetadata;
};

const PostPage = ({ metadata }: PostPageProps) => (
  <Layout>{metadata.title}</Layout>
);

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getAllSlugs().map((slug) => ({ params: { slug } })),
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    metadata: getPostMetadataBySlug(params?.slug as string),
  },
});
