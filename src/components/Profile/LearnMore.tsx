'use client';

function LearnMore() {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 cursor-pointer rounded-lg outline-none par'
      onClick={() => {
        if (location.hash === '#projects') location.hash = '#';
        location.hash = '#projects';
      }}
      type='button'
    >
      Learn More About Me
    </button>
  );
}

export default LearnMore;
