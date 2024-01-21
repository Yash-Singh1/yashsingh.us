import { type ReactNode } from 'react';

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='cv dark' lang='en'>
      <body>{children}</body>
    </html>
  );
}
