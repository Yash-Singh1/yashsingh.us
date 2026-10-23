import coolBgStyles from '../../styles/cool-bg.module.scss';
import Paragraph from '../../components/Paragraph';
import Link from 'next/link';

export const metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <main className={`table w-full ${coolBgStyles['cool-bg']}`}>
      <div className='table-cell align-middle h-[calc(100vh-4rem)]'>
        <h1 className='text-6xl md:text-7xl lg:text-9xl text-center select-none'>😯</h1>
        <Paragraph className='text-2xl md:text-3xl lg:text-4xl text-white mx-auto text-center'>
          404 | We couldn&apos;t find that page, maybe try the{' '}
          <Link
            className='text-[#518bd5] duration-500 hover:text-[#5865f2] hover:duration-500'
            href='/'
          >
            homepage
          </Link>
          ?
        </Paragraph>
      </div>
    </main>
  );
}
