import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`py-12 lg:py-16 xl:py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
