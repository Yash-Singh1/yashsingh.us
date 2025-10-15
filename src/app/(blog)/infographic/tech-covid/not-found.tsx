import coolBgStyles from '../../../../styles/cool-bg.module.scss';
import Paragraph from '../../../../components/Paragraph';

export default function NotFound() {
  return (
    <div className={`table w-full ${coolBgStyles['cool-bg']}`}>
      <main className='table-cell align-middle h-[calc(100vh-4rem)]'>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center'>😯</h1>
        <Paragraph className='text-2xl md:text-3xl lg:text-4xl text-white mx-auto text-center'>
          404 | The TechCovid Infographic was removed due to LucidCharts exporting heavyweight
          obfuscated SVG files.
        </Paragraph>
      </main>
    </div>
  );
}
