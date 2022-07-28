import Image from 'next/future/image';
import Paragraph from '../Paragraph';
import profileStyles from '../../styles/profile.module.scss';
import { motion } from 'framer-motion';

interface BadgeProps {
  icon?: string;
  text?: string;
  link?: string;
  circlize?: boolean;
}

function Badge({ icon, text, link, circlize = false }: BadgeProps) {
  return (
    <motion.a
      initial={{ translateY: 0 }}
      whileHover={{
        translateY: -2,
        scale: 1.1,
        transition: {
          duration: 0.1,
          delay: 0,
          ease: 'easeInOut',
        },
      }}
      whileTap={{
        scale: 1,
        transition: {
          duration: 0.1,
          ease: 'easeInOut',
        },
      }}
      href={link || '/404'}
      target='_blank'
      className='w-44 grid grid-cols-[max-content_1fr] cursor-pointer shadow-md relative active:shadow-md active:bottom-0 active:transition-none hover:bottom-[1px] hover:shadow-lg hover:transition-all transition-all border-2 border-gray-800 rounded-md p-0'
      rel='noreferrer'
    >
      <Image
        src={icon || 'data:'}
        alt={icon ? text || '' : ''}
        width={45}
        height={45}
        className={`p-[0.3rem] bg-[#242526]/60 ${profileStyles['no-select']} h-[2.8125rem] ${
          circlize ? 'rounded-full' : 'rounded-l-md'
        }`}
      />
      <Paragraph className='text-xl mt-0 bg-[#343a40]/75 rounded-r-md flex justify-start pl-2 items-center w-full md:w-full'>
        {text || 'N/A'}
      </Paragraph>
    </motion.a>
  );
}

export default Badge;
