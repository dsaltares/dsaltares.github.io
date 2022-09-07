import type { GetStaticProps, GetStaticPaths } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Layout from '@components/Layout';
import {
  getAllSlugs,
  getPostSource,
  getPostMetadataBySlug,
  type PostMetadata,
  getSeriesMetadata,
} from '@lib/posts';
import PostHeader from '@components/PostHeader';
import PostContent from '@components/PostContent';
import PostSeries from '@components/PostSeries';
import Disqus from '@components/Disqus';
import Config from '@lib/config';

type PostPageProps = {
  metadata: PostMetadata;
  series?: PostMetadata[];
  source: MDXRemoteSerializeResult;
};

const PostPage = ({ metadata, series, source }: PostPageProps) => (
  <Layout>
    <NextSeo
      title={`${metadata.title} · ${Config.title}`}
      description={metadata.description || Config.description}
      canonical={`${Config.url}/${metadata.slug}`}
      openGraph={{
        type: 'website',
        title: `${metadata.title} · ${Config.title}`,
        description: metadata.description || Config.description,
        images: metadata.banner
          ? [
              {
                url: `${Config.url}${metadata.banner}`,
              },
            ]
          : [],
      }}
    />
    <Head>
      <meta name="keywords" content={metadata.keywords.join(',')} />
    </Head>
    <article className="text-content mb-10">
      <PostHeader post={metadata} />
      {series && metadata.series && (
        <PostSeries name={metadata.series} posts={series} />
      )}
      <PostContent source={source} />
    </article>
    <Disqus post={metadata} />
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
      series: metadata.series && getSeriesMetadata(metadata.series),
    },
  };
};
