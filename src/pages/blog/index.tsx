import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import coolBgStyles from '../../styles/cool-bg.module.scss';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PostList, { Post } from '../../types/PostList';
import matter from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';
import stripExtension from '../../helpers/stripExtension';

const Blog: NextPage<{ slug: string; data: PostList }> = function Blog(props) {
  return (
    <>
      <Head>
        <title>{"Saiansh (Yash) Singh's Blog"}</title>
      </Head>

      <main className={`box-content ${coolBgStyles['cool-bg']} p-0`}>
        <Container>
          <Header title="Yash Singh's Blog" intro='Welcome to' className='w-3/4 mx-auto' />
          <div className='mt-10 w-full flex flex-wrap flex-grow-0 flex-shrink-0 justify-center items-center'>
            {props.data
              ? props.data.map((edge) => {
                  return (
                    <Link
                      href={edge.link || `/blog/post/${edge.filename}`}
                      key={edge.filename}
                      passHref
                    >
                      <motion.a
                        whileHover={{ scale: 1.03, type: 'tween' }}
                        whileTap={{ scale: 1, type: 'tween' }}
                        className='p-4 border-[3px] border-gray-300/60 active:border-gray-300/60 hover:border-gray-200/80 rounded-md m-3 ml-0 basis-full lg:basis-3/4 bg-black/20 group shadow-md cursor-pointer hover:ring-4 hover:bg-black/30 hover:ring-blue-900 hover:shadow-xl hover:transition-all transition-all active:shadow-md active:ring-0 active:transition-none'
                      >
                        <h1 className='text-violet-700 uppercase font-mono font-bold sm:text-2xl text-xl group-hover:text-violet-500 transition mr-2'>
                          {edge.title!}
                        </h1>
                        <p className='par text-gray-400 group-hover:text-gray-300 transition'>
                          {edge.subtitle!}
                        </p>
                      </motion.a>
                    </Link>
                  );
                })
              : null}
          </div>
        </Container>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async function getStaticProps() {
  let data: PostList;
  let dir = '../../../';
  while (!fs.existsSync(path.join(__dirname, dir, 'node_modules'))) {
    dir += '../';
  }
  data = fs.readdirSync(path.join(__dirname, dir, 'content/posts')).map((contentFile) => {
    let contents = fs.readFileSync(path.join(__dirname, dir, 'content/posts', contentFile), 'utf8');
    return {
      ...matter(contents).data,
      filename: stripExtension(contentFile),
    } as Post;
  });

  data = data!.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: { data },
  };
};

export default Blog;
