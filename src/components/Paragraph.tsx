import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

function Paragraph({
  children,
  className = '',
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-[#D1D1D1] text-lg md:text-xl mt-5 par', className)} {...props}>
      {children}
    </p>
  );
}

export default Paragraph;
