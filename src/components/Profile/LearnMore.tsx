'use client';

import { useRouter } from 'next/navigation';

function LearnMore() {
  return (
    <button
      className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 cursor-pointer rounded-lg outline-none par'
      onClick={() => {
        if (location.hash === '#projects') location.hash = '#';
        location.hash = '#projects';
      }}
      type='button'
    >
      Learn More
    </button>
  );
}

export function BlogBtn() {
  const router = useRouter();

  return (
    <div className='relative inline-block group'>
      <div
        aria-hidden
        className='pointer-events-none absolute -inset-[8px] rounded-xl bg-gradient-to-r from-fuchsia-800/50 via-violet-800/50 to-indigo-800/50 opacity-40 blur-sm transition duration-500 group-hover:opacity-20'
      />
      <button
        className='relative bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 border-violet-700 hover:border-violet-500 cursor-pointer rounded-lg outline-none par focus-visible:ring-2 focus-visible:ring-violet-300'
        onClick={() => {
          router.push('/blog');
        }}
        type='button'
        aria-label='View my blog'
      >
        View my blog!
      </button>
    </div>
  );
}

export default LearnMore;
