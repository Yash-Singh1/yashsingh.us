import Link from 'next/link';
import footerStyles from '../styles/footer.module.scss';
import Image from 'next/image';
import pfp from '../assets/pfp.png';
import { cn } from '@/lib/utils';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer id='footer' className={cn(footerStyles['footer'], className)}>
      <div className={footerStyles['footer-container']}>
        <div className='flex justify-center items-center'>
          <Image
            src={pfp}
            alt='profile picture'
            className='w-12 sm:w-16'
            width={80}
            height={80}
            loading='lazy'
            placeholder='blur'
          />
        </div>
        <div className='flex flex-wrap flex-row items-center justify-end pr-4 mid:pr-0 mid:justify-around pb-2 mid:pb-0'>
          <div className='links lg:text-2xl md:text-xl text-lg flex justify-center gap-2'>
            <Link href='/'>Home</Link>
            <span className='dot'> · </span>
            <Link href='/blog'>Blog</Link>
          </div>

          <div className='lg:text-xl md:text-lg text-base'>Ⓒ 2023 Yash Singh</div>
        </div>
      </div>
    </footer>
  );
}
