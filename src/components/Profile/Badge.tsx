'use client';

import Image from 'next/image';
import Paragraph from '../Paragraph';
import profileStyles from '../../styles/profile.module.scss';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { tailwind } from '@/helpers/passthrough';

interface BadgeProps {
  icon?: string;
  text?: string;
  link?: string;
  circlize?: boolean;
}

const encoder = new TextEncoder();

function Badge({ icon, text, link, circlize = false }: BadgeProps) {
  const iconClassname = tailwind`(className=" p-1 lg:p-[0.3rem] bg-[#242526]/75 lg:bg-[#242526]/60 ${
    profileStyles['no-select']
  } h-8 w-8 lg:h-[2.8125rem] lg:w-[2.8125rem] ${
    circlize ? 'rounded-full' : 'rounded-l-md'
  } group-hover:bg-[#242526]/100 self-center "`;

  return (
    <motion.a
      initial={{ translateY: 0 }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1,
          delay: 0,
          ease: 'linear',
        },
      }}
      whileTap={{
        scale: 1,
        transition: {
          duration: 0.1,
          delay: 0,
          ease: 'linear',
        },
      }}
      href={link || '/404'}
      target='_blank'
      className='w-32 sm:w-36 md:w-40 lg:w-44 grid grid-cols-[max-content_1fr] cursor-pointer shadow-md active:shadow-md active:transition-none hover:shadow-lg hover:border-gray-600 hover:ring-1 active:ring-0 active:transition-all hover:ring-gray-500 group hover:transition-all transition-all border-2 border-gray-800 rounded-md p-0'
      rel='noreferrer'
    >
      {icon && encoder.encode(icon).length > 1 && icon.length <= 2 ? (
        <span className={cn(iconClassname, 'flex justify-center items-center text-2xl')}>
          {icon}
        </span>
      ) : (
        <Image
          src={icon || 'data:'}
          alt={icon ? text || '' : ''}
          width={45}
          height={45}
          className={iconClassname}
        />
      )}
      <Paragraph className='text-sm md:text-lg lg:text-xl mt-0 bg-[#343a40]/75 group-hover:bg-[#343a40]/90 group-hover:transition-all rounded-r-md self-center h-full flex justify-start pl-2 items-center w-full md:w-full'>
        {text || 'N/A'}
      </Paragraph>
    </motion.a>
  );
}

export default Badge;
