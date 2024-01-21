import coolBgStyles from '../../styles/cool-bg.module.scss';
import Paragraph from '../../components/Paragraph';
import styles from '../../styles/not-found.module.scss';

export const metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <div className={`${styles['not-found-container']} ${coolBgStyles['cool-bg']}`}>
      <main className={styles['not-found-content']}>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center'>😯</h1>
        <Paragraph className='text-2xl md:text-3xl lg:text-4xl text-white mx-auto text-center'>
          404 | We couldn&apos;t find that page, maybe try the{' '}
          <a className={styles.link} href='/'>
            homepage
          </a>
          ?
        </Paragraph>
      </main>
    </div>
  );
}
