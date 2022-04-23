import type { ReactNode } from 'react';

function getInnerText(children: ReactNode): string {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    return children.map(getInnerText).join('');
  }
  return '';
}

type HTMLHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

function HeadingFactory(level: number) {
  return function Heading({ children = null }: { children?: ReactNode }) {
    const innerText = getInnerText(children).toLowerCase().replace(/\W+/g, '-');
    const LevelHeading: HTMLHeadings = `h${level}` as HTMLHeadings;
    return (
      <LevelHeading id={innerText} className='section-heading'>
        <a href={`#${innerText}`}>{children}</a>
      </LevelHeading>
    );
  };
}

export default HeadingFactory;
