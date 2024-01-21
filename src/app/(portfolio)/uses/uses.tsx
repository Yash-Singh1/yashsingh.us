'use client';

import postStyles from '../../../styles/post.module.scss';
import usesStyles from '../../../styles/uses.module.scss';
import Uses from '../../../components/Uses/Uses.mdx';
import components from '../../../components/Post/Markdown_Components';

export default function UsesContent() {
  return (
    <article
      className={`${postStyles['markdown-body']} ${usesStyles['markdown-body']} par prose prose-invert`}
    >
      <Uses components={components} />
    </article>
  );
}
