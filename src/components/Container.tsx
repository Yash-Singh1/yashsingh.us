import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('py-12 lg:py-16 xl:py-24 pl-2 p-4 sm:px-4 md:px-12 lg:px-24', className)}>
      {children}
    </div>
  );
}

export default Container;
