import coolBgStyles from '../../../../styles/cool-bg.module.scss';
import Paragraph from '../../../../components/Paragraph';
import styles from '../../../../styles/not-found.module.scss';

export default function NotFound() {
  return (
    <div className={`${styles['not-found-container']} ${coolBgStyles['cool-bg']}`}>
      <main className={styles['not-found-content']}>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center'>😯</h1>
        <Paragraph className='text-2xl md:text-3xl lg:text-4xl text-white mx-auto text-center'>
          404 | The TechCovid Infographic was removed due to LucidCharts exporting heavyweight
          obfuscated SVG files.
        </Paragraph>
      </main>
    </div>
  );
}
