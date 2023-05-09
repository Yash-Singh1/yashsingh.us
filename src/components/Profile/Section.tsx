import type { ReactNode } from 'react';
import profileStyles from '../../styles/profile.module.scss';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  const hash = title.toLowerCase().replace(' ', '-');
  return (
    <div
      data-aos='slide-right'
      className={`${profileStyles.aos} flex flex-col justify-center py-12 lg:py-16 xl:py-24 px-0 sm:px-6 md:px-12 lg:px-24 pr-0 sm:pr-0 min-h-screen`}
      id={hash}
    >
      <a href={`#${hash}`} className={profileStyles['subheading']}>
        {title}
      </a>
      {children}
    </div>
  );
}

export default Section;
