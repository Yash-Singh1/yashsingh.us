import { useState } from 'react';
import PropTypes from 'prop-types';

const intervalGap = 20;

function Progress({ percent, skill, animate = true }) {
  const [currentPercent, setCurrentPercent] = useState(animate ? 0 : percent);

  if (percent !== currentPercent) {
    setTimeout(() => setCurrentPercent(currentPercent + 1), intervalGap);
  }

  return (
    <>
      <p>
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
  currentPercent: PropTypes.number,
  animate: PropTypes.bool
};

export default Progress;
