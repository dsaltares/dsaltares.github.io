import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        David Saltares · Engineering Leadership &amp; Software Development
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
