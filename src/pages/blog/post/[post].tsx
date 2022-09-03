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
import Router from 'next/router';
import components from '../../../components/Post/Markdown_Components';
import path from 'node:path';
import matter from 'gray-matter';
import { Post as PostType } from '../../../types/PostList';
import stripExtension from '../../../helpers/stripExtension';
import pfp from '../../../assets/pfp.png';
import Image from 'next/future/image';
import plugins from '../../../components/Post/plugins';
import 'katex/dist/katex.min.css';

const Post: NextPage<{ data: PostType; content: MDXRemoteSerializeResult }> = function ({
  data,
  content,
}) {
  return (
    <>
      <Head>
        <title>{`${data.title} | Yash Singh's Blog - yashsingh.us`}</title>
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
                className='cursor-pointer text-base sm:text-lg md:text-xl'
              >
                Blog
              </Breadcrumbs.Item>
              <Breadcrumbs.Item className='text-base sm:text-lg md:text-xl'>
                {data.title}
              </Breadcrumbs.Item>
            </Breadcrumbs>
            <div className='md:ml-11 mt-5 mb-7'>
              <div className='grid grid-cols-[max-content_1fr] h-8 sm:h-12 mb-4'>
                <Image
                  src={pfp}
                  alt='profile picture'
                  className='w-8 sm:w-12 rounded-full self-center'
                  width={80}
                  height={80}
                  loading='lazy'
                  placeholder='blur'
                />
                <div className='flex flex-col justify-center gap-0 self-center ml-2 text-base leading-4 sm:text-lg sm:leading-5'>
                  <span className='text-emerald-400'>Yash Singh</span>
                  <time
                    dateTime={new Date(data.date).toISOString().replace(/T.*$/, '')}
                    className='text-gray-500'
                  >
                    {data.date}
                  </time>
                </div>
              </div>
              <img
                src={data.image}
                className='w-full lg:w-3/4 xl:w-1/2 rounded-md'
                alt={data.title}
              />
            </div>
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
    mdxOptions: plugins,
  });

  return {
    props: {
      data,
      content: mdxSource,
    },
  };
};
