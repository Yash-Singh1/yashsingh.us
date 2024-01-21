'use client';

import postStyles from '../../../styles/post.module.scss';
import contactStyles from '../../../styles/contacts.module.scss';
import components from '../../../components/Post/Markdown_Components';
import Contacts from '../../../components/Contacts/Contacts.mdx';

export default function ContactsContent() {
  return (
    <article
      className={`${postStyles['markdown-body']} ${contactStyles['markdown-body']} prose prose-invert par`}
    >
      <Contacts components={components} />
    </article>
  );
}
