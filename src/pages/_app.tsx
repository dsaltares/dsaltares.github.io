import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>My new cool app</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
