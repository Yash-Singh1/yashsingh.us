import type { ReactNode } from 'react';
import { Text } from '@geist-ui/core';

function getInnerText(children: ReactNode): string {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    return children.map(getInnerText).join('');
  }
  return '';
}

type HTMLHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const higherLevels = [null, '5xl', '4xl', '3xl', '2xl', 'xl', 'xl'];
export const lowerLevels = [null, '3xl', '2xl', 'xl', 'lg', 'lg', 'lg'];

function HeadingFactory(level: number) {
  return function Heading({ children = null }: { children?: ReactNode } | undefined = {}) {
    const innerText = getInnerText(children).toLowerCase().replace(/\W+/g, '-');
    const levelHeading: HTMLHeadings = `h${level}` as HTMLHeadings;
    return (
      <Text
        {...{ [levelHeading]: true }}
        id={level <= 3 ? innerText : ''}
        className={`section-heading lg:text-${higherLevels[level]} text-${lowerLevels[level]}`}
      >
        <a href={level <= 3 ? `#${innerText}` : ''}>{children}</a>
      </Text>
    );
  };
}

export default HeadingFactory;
