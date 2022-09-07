import { NextSeo } from 'next-seo';
import Layout from '@components/Layout';

const NotFoundPage = () => (
  <Layout>
    <NextSeo title="404: Not found" />
    <h1 className="text-center text-contentLight text-6xl mb-10">404</h1>
    <p className="text-3xl">This is not the content you are looking for.</p>
  </Layout>
);

export default NotFoundPage;
