import '../styles/globals.css';
import '../styles/prism.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Config from '@lib/config';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{`${Config.title} · ${Config.description}`}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
