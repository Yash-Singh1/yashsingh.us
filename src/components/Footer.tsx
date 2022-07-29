import Link from 'next/link';
import footerStyles from '../styles/footer.module.scss';
import Image from 'next/future/image';
import pfp from '../assets/pfp.png';

export default function Footer() {
  return (
    <footer className={footerStyles['footer']}>
      <Image
        src={pfp}
        alt='profile picture'
        className='w-16'
        width={80}
        height={80}
        loading='lazy'
        placeholder='blur'
      />
      <div className='links lg:text-2xl md:text-xl sm:text-lg flex justify-center gap-2'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <span className='dot'> · </span>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>
      <div className='copyright lg:text-xl md:text-lg sm:text-base'>Ⓒ 2022 Yash Singh</div>
    </footer>
  );
}
