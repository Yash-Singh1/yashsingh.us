import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function More({ children, onShown = () => {} }) {
  console.log(onShown.toString())

  const [moreShown, showMore] = useState(false);

  useEffect(() => {
    if (moreShown) {
      onShown();
    }
  }, [moreShown]);

  return (
    <>
      <div id='show-more-container' className={`text-center mt-5${moreShown ? ' hidden' : ''}`}>
        <button
          id='show-more'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none'
          onClick={() => showMore(true)}
          type='button'
        >
          Show More
        </button>
      </div>
      {moreShown ? children : null}
      <div id='show-less-container' className={`text-center mt-5${moreShown ? '' : ' hidden'}`}>
        <button
          id='show-less'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none'
          onClick={() => showMore(false)}
          type='button'
        >
          Show Less
        </button>
      </div>
    </>
  );
}

More.propTypes = {
  children: PropTypes.node,
  onShown: PropTypes.func
};

export default More;
