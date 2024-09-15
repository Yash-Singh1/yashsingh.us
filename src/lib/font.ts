import localFont from 'next/font/local';

export const font = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/baloo-bhai-2/files/baloo-bhai-2-latin-600-normal.woff2',
      weight: '600',
    },
    {
      path: '../../node_modules/@fontsource/baloo-bhai-2/files/baloo-bhai-2-latin-700-normal.woff2',
      weight: '700',
    },
  ],
  variable: '--font-baloo-bhai',
});
