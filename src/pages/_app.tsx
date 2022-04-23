import '../styles/global.scss';
import '../styles/loader.scss';
import '@fontsource/baloo-bhai-2/600.css';
import '@fontsource/baloo-bhai-2/700.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import js from '../helpers/js';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-T7G01BVK0J' async></Script>
      <Script id='gtag-script'>{js`
      if (navigator.onLine) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-T7G01BVK0J');
      }`}</Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
