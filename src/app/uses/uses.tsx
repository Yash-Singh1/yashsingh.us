'use client';

import postStyles from '../../styles/post.module.scss';
import usesStyles from '../../styles/uses.module.scss';
import Uses from '../../components/Uses/Uses.mdx';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import balooTheme from '../../themes/baloo';
import components from '../../components/Post/Markdown_Components';

export default function UsesContent() {
  return (
    <GeistProvider themeType='baloo' themes={[balooTheme]}>
      <CssBaseline />
      <article className={`${postStyles['markdown-body']} ${usesStyles['markdown-body']} par`}>
        <Uses components={components} />
      </article>
    </GeistProvider>
  );
}
