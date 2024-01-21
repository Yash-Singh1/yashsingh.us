import * as React from 'react';

function getInnerText(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    return children.map(getInnerText).join('');
  }
  return '';
}

type HTMLHeadings = `h${1 | 2 | 3 | 4 | 5 | 6}`;

export const higherLevels = [null, '5xl', '4xl', '3xl', '2xl', 'xl', 'xl'];
export const lowerLevels = [null, '3xl', '2xl', 'xl', 'lg', 'lg', 'lg'];

function HeadingFactory(level: number) {
  return function Heading({ children = null }: { children?: React.ReactNode } | undefined = {}) {
    // TODO: Handle duplicates with slugging libraries
    const innerText = getInnerText(children).toLowerCase().replace(/\W+/g, '-');
    const levelHeading: HTMLHeadings = `h${level}` as HTMLHeadings;

    return React.createElement(
      levelHeading,
      {
        className: `section-heading lg:text-${higherLevels[level]} text-${lowerLevels[level]}`,
        id: level <= 3 ? innerText : '',
      },
      <a href={level <= 3 ? `#${innerText}` : ''} style={{ textDecoration: 'none' }}>
        {children}
      </a>,
    );
  };
}

export default HeadingFactory;
