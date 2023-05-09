import { type Metadata } from 'next';
import type React from 'react';
import Footer from '../components/Footer';
import js from '../helpers/passthrough';
import Script from 'next/script';
import { AOSProvider } from '../components/AOSProvider';
import '../styles/global.scss';
import '../styles/loader.scss';
import '@fontsource/baloo-bhai-2/600.css';
import '@fontsource/baloo-bhai-2/700.css';

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
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-T7G01BVK0J'
        strategy='lazyOnload'
      />
      <Script
        id='gtag-script'
        strategy='worker'
        dangerouslySetInnerHTML={{
          __html: js`
        if (navigator.onLine) {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-T7G01BVK0J');
        }`,
        }}
      />
      <AOSProvider />
    </html>
  );
}
