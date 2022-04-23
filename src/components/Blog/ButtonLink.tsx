import type { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface ButtonLinkProps {
  children?: ReactNode;
  to: string;
  className?: string;
}

function ButtonLink({ children, to, className }: ButtonLinkProps) {
  const { push: navigate } = useRouter();

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none par ${
        className || ''
      }`}
      onClick={() => navigate(to)}
      type='button'
    >
      {children}
    </button>
  );
}

export default ButtonLink;
