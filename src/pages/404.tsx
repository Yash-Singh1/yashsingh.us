import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/not-found.module.scss';
import coolBgStyles from '../styles/cool-bg.module.scss';
import Paragraph from '../components/Paragraph';
import { useRouter } from 'next/router';
import notFounds from '../data/specific404s';

const NotFound: NextPage = function NotFound() {
  const router = useRouter();
  return (
    <div className={`${styles['not-found-container']} ${coolBgStyles['cool-bg']}`}>
      <Head>
        <title>404 - Not Found</title>
      </Head>

      <main className={styles['not-found-content']}>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center'>😯</h1>
        <Paragraph className='text-2xl md:text-3xl lg:text-4xl text-white mx-auto text-center'>
          {notFounds[router.asPath || ''] || (
            <>
              404 | We couldn&apos;t find that page, maybe try the{' '}
              <Link className={styles.link} href='/' prefetch={false}>
                homepage
              </Link>
              ?
            </>
          )}
        </Paragraph>
      </main>
    </div>
  );
};

export default NotFound;
