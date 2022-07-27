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

function HeadingFactory(level: number) {
  return function Heading({ children = null }: { children?: ReactNode } | undefined = {}) {
    const innerText = getInnerText(children).toLowerCase().replace(/\W+/g, '-');
    const levelHeading: HTMLHeadings = `h${level}` as HTMLHeadings;
    return (
      <Text {...{ [levelHeading]: true }} id={innerText} className='section-heading'>
        <a href={`#${innerText}`}>{children}</a>
      </Text>
    );
  };
}

export default HeadingFactory;
