'use client';

import { Fragment } from 'react';
import postStyles from '../../../styles/post.module.scss';
import usesStyles from '../../../styles/uses.module.scss';
import Uses from '../../../components/Uses/Uses.mdx';
import components from '../../../components/Post/Markdown_Components';
import AlacrittyLogo from '@/components/SimpleIconLogos/Alacritty';

export default function UsesContent() {
  return (
    <article
      className={`${postStyles['markdown-body']} ${usesStyles['markdown-body']} par prose prose-invert`}
    >
      <Uses components={{ ...components, AlacrittyLogo, Fragment }} />
    </article>
  );
}
