import { type Metadata } from 'next';
import type React from 'react';
import Footer from '../components/Footer';
import { AOSProvider } from '../components/AOSProvider';
import js from '../helpers/passthrough';
import '../styles/global.scss';
import '../styles/loader.scss';
import '@fontsource/baloo-bhai-2/600.css';
import '@fontsource/baloo-bhai-2/700.css';
import Script from 'next/script';

export const metadata: Metadata = {
  authors: [
    {
      name: 'Yash Singh',
      url: 'https://yashsingh.us',
    },
  ],
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  metadataBase: new URL('https://yashsingh.us/'),
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body>
        {children}
        <Footer />
      </body>
      <AOSProvider />
      <Script
        id='posthog-js'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: js`
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        if (!window.location.host.includes('127.0.0.1') && !window.location.host.includes('localhost')) {
          posthog.init('wavhjmW6gdO6F3TuUJ2nEo3nFQYYhnDdUdHBpumycSg_chp'.split('').reverse().join(''),{api_host:'https://app.posthog.com'});
        }
`,
        }}
      />
    </html>
  );
}
