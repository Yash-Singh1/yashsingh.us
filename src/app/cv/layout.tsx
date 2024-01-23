import { PostHogScript } from '@/components/PostHogScript';
import { type ReactNode } from 'react';

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='cv dark' lang='en'>
      <meta name='darkreader-lock' />
      <body>{children}</body>
      <PostHogScript />
    </html>
  );
}
