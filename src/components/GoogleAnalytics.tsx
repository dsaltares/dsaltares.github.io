import Script from 'next/script';
import Config from '@lib/config';

const GoogleAnalytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${Config.googleAnalyticsId}');
  `}
    </Script>
  </>
);

export default GoogleAnalytics;
