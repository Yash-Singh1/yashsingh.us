import type { NextPage } from 'next';
import postStyles from '../styles/post.module.scss';
import usesStyles from '../styles/uses.module.scss';
import coolBgStyles from '../styles/cool-bg.module.scss';
import Uses from '../components/Uses/Uses.mdx';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import Head from 'next/head';
import balooTheme from '../themes/baloo';
import Code from '../components/Post/Markdown_Components/Code';
import headings from '../components/Post/Markdown_Components/Headings';

const UsesPage: NextPage = function UsesPage() {
  return (
    <div>
      <Head>
        <title>Uses - yashsingh.us</title>
        <meta name='description' content="My developer setup. Inspired by Wess Bos' uses.tech." />
      </Head>

      <main className={`${coolBgStyles['cool-bg']} ${usesStyles['cool-bg']}`}>
        <GeistProvider themeType='baloo' themes={[balooTheme]}>
          <CssBaseline />
          <article className={`${postStyles['markdown-body']} ${usesStyles['markdown-body']} par`}>
            <Uses
              components={{
                ...headings,
                code: Code,
              }}
            />
          </article>{' '}
        </GeistProvider>
      </main>
    </div>
  );
};

export default UsesPage;
