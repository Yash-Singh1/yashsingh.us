import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { gql, staticRequest } from 'tinacms';
import { Query } from '../../../../.tina/__generated__/types';
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

const Post: NextPage<{ data: Query['posts']; content: MDXRemoteSerializeResult }> = function ({
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
  const postsListData = (await staticRequest({
    query: gql`
      {
        postsConnection {
          totalCount
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as Query;

  return {
    paths: postsListData.postsConnection.edges!.map((post) => ({
      params: { post: post!.node!._sys.filename },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
    query Post($relativePath: String!) {
      posts(relativePath: $relativePath) {
        title
        body
        _sys {
          filename
          basename
        }
      }
    }
  `;

  let data: Query = {} as Query;
  try {
    data = (await staticRequest({
      query,
      variables: {
        relativePath: `${params!.post}.mdx`,
      },
    })) as Query;
  } catch {}

  const source = fs
    .readFileSync(path.join(__dirname, `../../../../../content/posts/${params!.post}.mdx`), 'utf8')
    .replace(/^\s*---[^]*?---\s*$/m, '');
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
    },
  });

  return {
    props: {
      data: data.posts,
      content: mdxSource,
    },
  };
};
