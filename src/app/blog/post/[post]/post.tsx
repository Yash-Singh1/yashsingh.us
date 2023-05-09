'use client';

import { type serialize } from 'next-mdx-remote/serialize';
import 'katex/dist/katex.min.css';
import { GeistProvider, CssBaseline, Breadcrumbs } from '@geist-ui/core';
import postStyles from '../../../../styles/post.module.scss';
import coolBgStyles from '../../../../styles/cool-bg.module.scss';
import balooTheme from '../../../../themes/baloo';
import Container from '../../../../components/Container';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import pfp from '../../../../assets/pfp.png';
import { MDXRemote } from 'next-mdx-remote';
import components from '../../../../components/Post/Markdown_Components';
import Mermaid from '../../../../components/Post/Markdown_Components/Mermaid';

export default function PostContent({
  content,
  data,
}: {
  content: Awaited<ReturnType<typeof serialize>>;
  data: any;
}) {
  const router = useRouter();

  return (
    <main className={`box-content ${coolBgStyles['cool-bg']} p-0`}>
      <Container className='bg-black/5'>
        <GeistProvider themeType='baloo' themes={[balooTheme]}>
          <CssBaseline />
          <Breadcrumbs className={postStyles['breadcrumb']}>
            <Breadcrumbs.Item
              onClick={() => {
                router.push('/blog');
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
            <MDXRemote {...content} components={{ ...components, Mermaid }} />
          </article>
        </GeistProvider>
      </Container>
    </main>
  );
}
