import { motion } from 'framer-motion';

interface BadgeCardProps {
  title: string;
  description: string;
}

function BadgeCard({ title, description }: BadgeCardProps) {
  return (
    <motion.div
      initial={{ translateY: 0 }}
      whileHover={{
        translateY: -2,
        scale: 1.03,
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
      className='border-2 p-5 text-gray-400 bg-[#343a40]/75 border-gray-800 basis-1/3 rounded-md shadow-md hover:shadow-lg cursor-pointer'
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

export default BadgeCard;
