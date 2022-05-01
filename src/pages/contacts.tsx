import type { NextPage } from 'next';
import postStyles from '../styles/post.module.scss';
import Contacts from '../components/Contacts/Contacts.mdx';
import coolBgStyles from '../styles/cool-bg.module.scss';
import contactStyles from '../styles/contacts.module.scss';
import HeadingFactory from '../components/Post/Markdown_Components/HeadingFactory';
import Head from 'next/head';

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
              h1: HeadingFactory(1),
              h2: HeadingFactory(2),
              h3: HeadingFactory(3),
            }}
          />
        </article>
      </main>
    </div>
  );
};

export default ContactsPage;
