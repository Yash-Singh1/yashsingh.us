import type { ReactNode } from 'react';

export function Code(props: { children?: ReactNode; classname?: string; [key: PropertyKey]: any }) {
  return (
    <code
      {...props}
      className={`${props.className || ''} ${
        !Array.isArray(props.children) && typeof props.children === 'string'
          ? 'bg-black/40 rounded-sm p-1'
          : ''
      }`}
    />
  );
}

export default Code;
