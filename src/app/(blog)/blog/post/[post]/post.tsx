import 'katex/dist/katex.min.css';
import postStyles from '../../../../../styles/post.module.scss';
import coolBgStyles from '../../../../../styles/cool-bg.module.scss';
import Container from '../../../../../components/Container';
import Image from 'next/image';
import pfp from '../../../../../assets/pfp.png';
import { MDXRemote } from 'next-mdx-remote/rsc';
import components from '../../../../../components/Post/Markdown_Components';
import Mermaid from '../../../../../components/Post/Markdown_Components/Mermaid';
import plugins from '../../../../../components/Post/plugins';
import Link from 'next/link';

export default function PostContent({ data, source }: { data: any; source: string }) {
  return (
    <main className={`box-content ${coolBgStyles['cool-bg']} p-0`}>
      <Container>
        <div className={`${postStyles['breadcrumb']} par`}>
          <Link
            href='/blog'
            className='cursor-pointer text-base sm:text-lg md:text-xl inline-flex items-center'
          >
            Blog
          </Link>
          <span>/</span>
          <span className='text-base sm:text-lg md:text-xl'>{data.title}</span>
        </div>
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
            <div className='flex flex-col justify-center gap-0 self-center ml-2 text-base leading-4 sm:text-lg sm:leading-5 par'>
              <span className='text-emerald-400'>Yash Singh</span>
              <time
                dateTime={new Date(data.date).toISOString().replace(/T.*$/, '')}
                className='text-gray-500'
              >
                {data.date}
              </time>
            </div>
          </div>
          {data.image ? (
            <img
              src={data.image}
              className='w-full lg:w-3/4 xl:w-1/2 rounded-md'
              alt={data.title}
            />
          ) : null}
        </div>
        <article
          className={`${postStyles['markdown-body']} par prose dark:prose-invert max-w-none`}
        >
          <MDXRemote
            options={{
              mdxOptions: plugins,
            }}
            source={source}
            components={{ ...components, Mermaid }}
          />
        </article>
      </Container>
    </main>
  );
}
