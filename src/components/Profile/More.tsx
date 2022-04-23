import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import profileStyles from '../../styles/profile.module.scss';

interface MoreProps {
  children?: ReactNode;
  onShown?(): void;
  onHidden?(): void;
}

function More({ children, onShown = () => {}, onHidden = () => {} }: MoreProps) {
  const [moreShown, showMore] = useState<boolean>(false);

  useEffect(() => {
    if (moreShown) {
      onShown();
    }
  }, [moreShown, onShown]);

  return (
    <>
      <div
        className={`${profileStyles['show-more-container']} text-center mt-5${
          moreShown ? ' hidden' : ''
        }`}
      >
        <button
          id='show-more'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none'
          onClick={() => showMore(true)}
          type='button'
        >
          Show More
        </button>
      </div>
      {moreShown ? children : null}
      <div
        className={`${profileStyles['show-less-container']} text-center mt-5${
          moreShown ? '' : ' hidden'
        }`}
      >
        <button
          id='show-less'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none'
          onClick={() => {
            onHidden();
            showMore(false);
          }}
          type='button'
        >
          Show Less
        </button>
      </div>
    </>
  );
}

export default More;
