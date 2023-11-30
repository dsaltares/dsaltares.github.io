import '../styles/globals.css';
import '../styles/prism.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Config from '@lib/config';
import GoogleAnalytics from '@components/GoogleAnalytics';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{`${Config.title} · ${Config.description}`}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="description"
        content="I am David and I write about engineering leadership, remote teams, software development and games development."
      ></meta>
      <meta name="robots" content="all" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/img/touch-icon-144-precomposed.png"
      ></link>
    </Head>
    <Script id="mailer-lite">
      {`
           (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '712960');
        `}
    </Script>
    <GoogleAnalytics />
    <Component {...pageProps} />
  </>
);

export default App;
