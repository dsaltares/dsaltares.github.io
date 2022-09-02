import type { GetStaticProps, GetStaticPaths } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '@components/Layout';
import {
  getAllSlugs,
  getPostSource,
  getPostMetadataBySlug,
  type PostMetadata,
} from '@lib/posts';
import PostHeader from '@components/PostHeader';
import PostContent from '@components/PostContent';

type PostPageProps = {
  metadata: PostMetadata;
  source: MDXRemoteSerializeResult;
};

const PostPage = ({ metadata, source }: PostPageProps) => (
  <Layout>
    <article className="text-content">
      <PostHeader post={metadata} />
      <PostContent source={source} />
    </article>
  </Layout>
);

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getAllSlugs().map((slug) => ({ params: { slug } })),
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const metadata = getPostMetadataBySlug(params?.slug as string);

  if (!metadata) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const { frontmatter: _frontmatter, ...source } = await getPostSource(
    metadata.path
  );

  return {
    props: {
      metadata,
      source,
    },
  };
};
