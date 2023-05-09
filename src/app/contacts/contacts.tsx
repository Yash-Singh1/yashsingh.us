'use client';

import postStyles from '../../styles/post.module.scss';
import contactStyles from '../../styles/contacts.module.scss';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import balooTheme from '../../themes/baloo';
import components from '../../components/Post/Markdown_Components';
import Contacts from '../../components/Contacts/Contacts.mdx';

export default function ContactsContent() {
  return (
    <GeistProvider themeType='baloo' themes={[balooTheme]}>
      <CssBaseline />
      <article className={`${postStyles['markdown-body']} ${contactStyles['markdown-body']} par`}>
        <Contacts components={components} />
      </article>
    </GeistProvider>
  );
}
