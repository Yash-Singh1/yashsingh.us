import Image from 'next/future/image';
import Paragraph from '../Paragraph';

interface BadgeProps {
  icon: string;
  text: string;
  link: string;
}

function Badge({ icon, text, link }: BadgeProps) {
  return (
    <a
      href={link}
      target='_blank'
      className='w-56 grid grid-cols-[max-content_1fr] cursor-pointer'
      rel='noreferrer'
    >
      <Image src={icon} alt={text} width={40} height={40} className='p-1 bg-gray-200' />
      <Paragraph className='mt-0 bg-[#343a40]/75 flex justify-start pl-2 items-center'>
        {text}
      </Paragraph>
    </a>
  );
}

export default Badge;
