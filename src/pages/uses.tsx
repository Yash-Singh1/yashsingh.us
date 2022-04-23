import type { NextPage } from 'next';
import postStyles from '../styles/post.module.scss';
import usesStyles from '../styles/uses.module.scss';
import coolBgStyles from '../styles/cool-bg.module.scss';
import Uses from '../components/Uses/Uses.mdx';
import HeadingFactory from '../components/Post/Markdown_Components/HeadingFactory';
import Head from 'next/head';

const UsesPage: NextPage = function UsesPage() {
  return (
    <div>
      <Head>
        <title>Uses - yashsingh.us</title>
        <meta name='description' content="My developer setup. Inspired by Wess Bos' uses.tech." />
      </Head>

      <main className={`${coolBgStyles['cool-bg']} ${usesStyles['cool-bg']}`}>
        <article className={`${postStyles['markdown-body']} ${usesStyles['markdown-body']} par`}>
          <Uses
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

export default UsesPage;
