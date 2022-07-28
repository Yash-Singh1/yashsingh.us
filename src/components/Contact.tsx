import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ContactProps {
  internal?: boolean;
  href: string;
  name: string;
  final: boolean;
  index: number;
  logo?: ReactNode | boolean;
}

export function Contact({
  internal = false,
  href,
  name,
  logo: Logo = false,
  final,
  index,
}: ContactProps) {
  const controls = useAnimation();

  return (
    <p style={{ display: 'inline-block', marginLeft: index === 0 ? '0' : '1.5rem' }}>
      {Logo === false ? null : (
        <a {...(internal ? {} : { target: '_blank', rel: 'noreferrer' })} tabIndex={-1} href={href}>
          {Logo}
        </a>
      )}
      <Link href={href} {...(internal ? {} : { target: '_blank', rel: 'noreferrer' })}>
        <a
          onMouseEnter={() =>
            controls.start({
              scaleX: 2,
            })
          }
          onMouseLeave={() =>
            controls.start({
              scaleX: 0,
            })
          }
          className='inline-flex flex-col'
        >
          {name}
          <motion.span
            initial={{
              scaleX: 0,
              translateX: '50%',
            }}
            animate={controls}
            className='h-[2px] bg-slate-500 w-1/2'
          ></motion.span>
        </a>
      </Link>
      {final ? null : ' · '}
    </p>
  );
}

export default Contact;
