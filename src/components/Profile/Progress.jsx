import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsMounted } from 'react-tidy';
const intervalGap = 20;

function Progress({ percent, skill, animate = true }) {
  const [currentPercent, setCurrentPercent] = useState(animate ? 0 : percent);
  const isMounted = useIsMounted();

  useEffect(() => {
    setCurrentPercent(animate ? 0 : percent);
  }, [percent, animate]);

  useEffect(() => {
    if (percent > currentPercent) {
      setTimeout(() => {
        if (isMounted()) {
          setCurrentPercent((prevPercent) => prevPercent + 1);
        }
      }, intervalGap);
    } else if (percent < currentPercent) {
      setCurrentPercent(percent);
    }
  }, [currentPercent]);

  return (
    <>
      <p className='par'>
        {skill} ({currentPercent}%)
      </p>
      <div>
        <div>
          <div style={{ width: `${currentPercent}%` }} className='progress-bar'></div>
        </div>
      </div>
    </>
  );
}

Progress.propTypes = {
  skill: PropTypes.string,
  percent: PropTypes.number,
  animate: PropTypes.bool
};

export default Progress;
