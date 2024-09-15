'use client';

import { Fragment } from 'react';
import postStyles from '../../../styles/post.module.scss';
import Uses from '../../../components/Uses/Uses.mdx';
import components from '../../../components/Post/Markdown_Components';
import AlacrittyLogo from '@/components/SimpleIconLogos/Alacritty';
import { cn } from '@/lib/utils';

export default function UsesContent() {
  return (
    <article
      className={`${postStyles['markdown-body']} text-white pl-5 pt-6 par prose prose-invert`}
    >
      <Uses
        components={{
          ...components,
          AlacrittyLogo,
          Fragment,
          img: (props) => {
            return <img alt={props.alt} {...props} className={cn(props.className, 'mt-3')} />;
          },
        }}
      />
    </article>
  );
}
