// TODO: Bring in mixins.no-select to tailwind along with animation in footer.module.scss

import Link from 'next/link';
import footerStyles from '../styles/footer.module.scss';
import Image from 'next/image';
import pfp from '../assets/pfp.png';
import { cn } from '@/lib/utils';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer id='footer' className={cn('bg-black/20 text-gray-100', footerStyles['footer'], className)}>
      <div className='grid grid-cols-[1fr_2fr] box-border'>
        <div className='flex justify-center items-center'>
          <Image
            src={pfp}
            alt='profile picture'
            className='w-12 sm:w-16 rounded-[50%] p-3 select-none'
            width={80}
            height={80}
            loading='lazy'
            placeholder='blur'
          />
        </div>
        <div className='flex flex-wrap flex-row items-center justify-end pr-4 mid:pr-0 mid:justify-around pb-2 mid:pb-0'>
          <div className='links lg:text-2xl md:text-xl text-lg flex justify-center gap-2'>
            <Link className='p-1' href='/'>
              Home
            </Link>
            <span className='select-none'> · </span>
            <Link className='p-1' href='/blog'>
              Blog
            </Link>
          </div>

          <div className='lg:text-xl md:text-lg text-base'>Ⓒ 2023 Yash Singh</div>
        </div>
      </div>
    </footer>
  );
}
