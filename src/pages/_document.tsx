import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' data-theme='dark'>
      <Head>
        <meta name='author' content='Yash Singh' />
        <meta httpEquiv='content-language' content='en' />
        <link rel='alternative' type='application/rss+xml' href='/feed.xml' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
