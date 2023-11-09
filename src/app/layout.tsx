import { type Metadata } from 'next';
import type React from 'react';
import Footer from '../components/Footer';
import { AOSProvider } from '../components/AOSProvider';
import { PostHogProvider } from '../components/PostHogProvider';
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
      <AOSProvider />
      <PostHogProvider />
    </html>
  );
}
