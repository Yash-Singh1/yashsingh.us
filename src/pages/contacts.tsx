import type { NextPage } from 'next';
import postStyles from '../styles/post.module.scss';
import Contacts from '../components/Contacts/Contacts.mdx';
import coolBgStyles from '../styles/cool-bg.module.scss';
import contactStyles from '../styles/contacts.module.scss';
import Head from 'next/head';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import balooTheme from '../themes/baloo';
import Container from '../components/Container';
import components from '../components/Post/Markdown_Components';

const ContactsPage: NextPage = function ContactsPage() {
  return (
    <>
      <Head>
        <title>Contacts - yashsingh.us</title>
        <meta name='description' content="Yash Singh's Online Presence in one page." />
      </Head>

      <main className={`${coolBgStyles['cool-bg']} ${contactStyles['cool-bg']}`}>
        <Container className='bg-black/5'>
          <GeistProvider themeType='baloo' themes={[balooTheme]}>
            <CssBaseline />
            <article
              className={`${postStyles['markdown-body']} ${contactStyles['markdown-body']} par`}
            >
              <Contacts components={components} />
            </article>
          </GeistProvider>
        </Container>
      </main>
    </>
  );
};

export default ContactsPage;
