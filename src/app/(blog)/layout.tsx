import { type Metadata } from 'next';
import type React from 'react';
import Footer from '../../components/Footer';
import { AOSProvider } from '../../components/AOSProvider';
import '../../styles/global.scss';
import '../../styles/loader.scss';
import { PostHogScript } from '@/components/PostHogScript';
import { font } from '@/lib/font';

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
    <html lang='en' data-theme='dark' className={`dark ${font.variable}`}>
      <meta name='darkreader-lock' />
      <body>
        {children}
        <Footer />
      </body>
      <AOSProvider />
      <PostHogScript />
    </html>
  );
}
