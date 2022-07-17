import Link from 'next/link';
import footerStyles from '../styles/footer.module.scss';
import Image from 'next/future/image';

export default function Footer() {
  return (
    <footer className={footerStyles['footer']}>
      <Image
        src='https://avatars.githubusercontent.com/u/53054099?v=4'
        alt='profile picture'
        className='lg:w-20 w-10'
        width={80}
        height={80}
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
