import type { ReactNode } from 'react';
import profileStyles from '../../styles/profile.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
  handleHashChange?: () => void;
}

function Section({ title, children, handleHashChange }: SectionProps) {
  const hash = title.toLowerCase().replace(' ', '-');
  return (
    <div
      data-aos='slide-right'
      className={`${profileStyles.aos} min-h-screen ${profileStyles['section']}`}
      id={hash}
    >
      <span
        className={profileStyles['subheading']}
        onClick={() => {
          location.hash = `#${hash}`;
          if (handleHashChange) {
            handleHashChange();
          }
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
}

export default Section;
