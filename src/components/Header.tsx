import { DefaultTyper } from './Typer';
import type { ReactNode } from 'react';

interface HeaderProps {
  title: string | ReactNode;
  intro: string;
  children?: ReactNode;
  large?: boolean;
  className?: string;
}

const smileyFaces = ['😀', '😃', '😄', '🙂', '😎', '🤠'];

function Header({ title, intro, children = null, large = false, className = '' }: HeaderProps) {
  return (
    <div className={`${large ? '' : ''} header ${className} sm:overflow-x-hidden`}>
      <h1 className='font-semibold sm:text-xl text-lg font-mono text-amber-200'>
        Hey there {smileyFaces[Math.floor(Math.random() * smileyFaces.length)]}! {intro}
      </h1>
      <h1 className='font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:w-screen text-3xl text-[#F6F6F6] mt-5'>
        {title}
      </h1>
      <h1 className='font-semibold md:text-2xl sm:text-xl sm:w-screen text-lg font-mono text-amber-200 mt-5'>
        Working on <DefaultTyper />
      </h1>
      {children}
    </div>
  );
}

export default Header;
