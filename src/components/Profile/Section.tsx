import type { ReactNode } from 'react';
import profileStyles from '../../styles/profile.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  const hash = title.toLowerCase().replace(' ', '-');
  return (
    <div className={`${profileStyles['full-min-h']} ${profileStyles['section']}`} id={hash}>
      <div data-aos='slide-right' className={profileStyles.aos}>
        <span
          className={profileStyles['subheading']}
          onClick={() => {
            location.hash = `#${hash}`;
          }}
        >
          {title}
        </span>
        {children}
      </div>
    </div>
  );
}

export default Section;
