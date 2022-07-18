import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useIsMounted } from 'react-tidy';
import useOnScreen from '../../hooks/useOnScreen';
import profileStyles from '../../styles/profile.module.scss';

const intervalGap = 20;

interface ProgressProps {
  percent: number;
  skill: string;
  animate?: boolean;
  reference: RefObject<HTMLDivElement>;
}

function Progress({ percent, skill, animate = true, reference }: ProgressProps) {
  const [currentPercent, setCurrentPercent] = useState<number>(animate ? 0 : percent);
  const isMounted = useIsMounted();
  const onScreen = useOnScreen(reference);

  useEffect(() => {
    setCurrentPercent(animate ? 0 : percent);
  }, [percent, animate]);

  useEffect(() => {
    if (percent > currentPercent && onScreen) {
      setTimeout(() => {
        if (isMounted()) {
          setCurrentPercent((prevPercent) => prevPercent + 1);
        }
      }, intervalGap);
    } else if (percent < currentPercent) {
      setCurrentPercent(percent);
    }
  }, [currentPercent, isMounted, onScreen, percent]);

  return (
    <>
      <p className='par text-lg'>
        {skill} ({currentPercent}%)
      </p>
      <div>
        <div>
          <div
            style={{ width: `${currentPercent}%` }}
            className={profileStyles['progress-bar']}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Progress;
