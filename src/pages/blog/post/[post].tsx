import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import postStyles from '../../../styles/post.module.scss';
import coolBgStyles from '../../../styles/cool-bg.module.scss';
import Container from '../../../components/Container';
import Head from 'next/head';
import { GeistProvider, CssBaseline, Breadcrumbs } from '@geist-ui/core';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import * as fs from 'node:fs';
import balooTheme from '../../../themes/baloo';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import Router from 'next/router';
import components from '../../../components/Post/Markdown_Components';
import path from 'node:path';
import matter from 'gray-matter';
import { Post as PostType } from '../../../types/PostList';
import stripExtension from '../../../helpers/stripExtension';

const Post: NextPage<{ data: PostType; content: MDXRemoteSerializeResult }> = function ({
  data,
  content,
}) {
  return (
    <>
      <Head>
        <title>{data.title} | Yash Singh&apos;s Blog</title>
      </Head>

      <main className={`box-content ${coolBgStyles['cool-bg']} p-0`}>
        <Container className='bg-black/5'>
          <GeistProvider themeType='baloo' themes={[balooTheme]}>
            <CssBaseline />
            <Breadcrumbs className={postStyles['breadcrumb']}>
              <Breadcrumbs.Item
                onClick={() => {
                  Router.push('/blog');
                }}
                className='cursor-pointer'
              >
                Blog
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>{data.title}</Breadcrumbs.Item>
            </Breadcrumbs>
            <article className={`${postStyles['markdown-body']} ${postStyles['blog-post-body']}`}>
              <MDXRemote {...content} components={components} />
            </article>
          </GeistProvider>
        </Container>
      </main>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async function () {
  let dir = '../../../../';
  while (!fs.existsSync(path.join(__dirname, dir, 'node_modules'))) {
    dir += '../';
  }
  const postsListData = fs
    .readdirSync(path.join(__dirname, dir, 'content/posts'))
    .map((contentFileName) => {
      return stripExtension(contentFileName);
    });

  return {
    paths: postsListData.map((post) => ({
      params: { post },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let dir = '../../../../';
  while (!fs.readdirSync(path.join(__dirname, dir)).includes('node_modules')) {
    dir += '../';
  }
  const { content, data } = matter(
    fs.readFileSync(path.join(__dirname, dir, `content/posts/${params!.post}.mdx`), 'utf8')
  );
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
    },
  });

  return {
    props: {
      data,
      content: mdxSource,
    },
  };
};
