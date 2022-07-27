import type { NextPage } from 'next';
import postStyles from '../styles/post.module.scss';
import Contacts from '../components/Contacts/Contacts.mdx';
import coolBgStyles from '../styles/cool-bg.module.scss';
import contactStyles from '../styles/contacts.module.scss';
import Head from 'next/head';
import Code from '../components/Post/Markdown_Components/Code';
import headings from '../components/Post/Markdown_Components/Headings';

const ContactsPage: NextPage = function ContactsPage() {
  return (
    <div>
      <Head>
        <title>Contacts - yashsingh.us</title>
        <meta name='description' content="Yash Singh's Online Presence in one page." />
      </Head>

      <main className={`${coolBgStyles['cool-bg']} ${contactStyles['cool-bg']}`}>
        <article className={`${postStyles['markdown-body']} ${contactStyles['markdown-body']} par`}>
          <Contacts
            components={{
              ...headings,
              code: Code,
            }}
          />
        </article>
      </main>
    </div>
  );
};

export default ContactsPage;
