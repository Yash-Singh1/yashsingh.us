import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';
import profileStyles from '../styles/profile.module.scss';

interface ContactProps {
  internal?: boolean;
  href: string;
  name: string;
  logo?: ReactNode | boolean;
}

function Contact({ internal = false, href, name, logo: Logo = false }: ContactProps) {
  const controls = useAnimation();

  return (
    <p className={profileStyles['contact']}>
      {Logo === false ? null : (
        <a {...(internal ? {} : { target: '_blank', rel: 'noreferrer' })} tabIndex={-1} href={href}>
          {Logo}
        </a>
      )}
      <Link href={href} {...(internal ? {} : { target: '_blank', rel: 'noreferrer' })}>
        <a
          onMouseEnter={() =>
            controls.start({
              scaleX: 1,
            })
          }
          onMouseLeave={() =>
            controls.start({
              scaleX: 2,
            })
          }
          className='inline-flex flex-col'
        >
          {name}
          <motion.span
            initial={{
              scaleX: 2,
              translateX: '50%',
            }}
            animate={controls}
            className='h-[2px] bg-slate-500 w-1/2'
          ></motion.span>
        </a>
      </Link>
    </p>
  );
}

export default Contact;
