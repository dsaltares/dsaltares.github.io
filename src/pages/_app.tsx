import '../styles/globals.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

config.autoAddCss = false;
library.add(fas);
library.add(fab);

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
