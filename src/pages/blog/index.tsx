import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTina } from 'tinacms/dist/edit-state';
import { staticRequest, gql } from 'tinacms';
import { Query } from '../../../.tina/__generated__/types';
import coolBgStyles from '../../styles/cool-bg.module.scss';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';

const query = gql`
  {
    postsConnection(sort: "date", first: 100) {
      edges {
        node {
          id
          title
          subtitle
          image
          link
          _sys {
            filename
          }
        }
      }
    }
  }
`;

const Blog: NextPage<{ slug: string; data: Query }> = function Blog(props) {
  const { data } = useTina<Query>({
    query,
    variables: {},
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{"Saiansh (Yash) Singh's Blog"}</title>
      </Head>

      <main className={`box-content ${coolBgStyles['cool-bg']} p-0`}>
        <Container>
          <Header title="Yash Singh's Blog" intro='Welcome to' className='w-3/4 mx-auto' />
          <div className='mt-10 w-full flex flex-wrap flex-grow-0 flex-shrink-0 justify-center items-center'>
            {data.postsConnection
              ? data.postsConnection.edges!.reverse().map((edge) => {
                  return (
                    <Link
                      href={edge!.node!.link || `/blog/post/${edge!.node!._sys!.filename!}`}
                      key={edge!.node!.id}
                      passHref
                    >
                      <motion.a
                        whileHover={{ scale: 1.03, type: 'tween' }}
                        whileTap={{ scale: 1, type: 'tween' }}
                        className='p-4 border-[3px] border-gray-300/60 active:border-gray-300/60 hover:border-gray-200/80 rounded-md m-3 ml-0 basis-full lg:basis-3/4 bg-black/20 group shadow-md cursor-pointer hover:ring-4 hover:bg-black/30 hover:ring-blue-900 hover:shadow-xl hover:transition-all transition-all active:shadow-md active:ring-0 active:transition-none'
                      >
                        <h1 className='text-violet-700 uppercase font-mono font-bold sm:text-2xl text-xl group-hover:text-violet-500 transition mr-2'>
                          {edge!.node!.title!}
                        </h1>
                        <p className='text-gray-400 w-3/4 group-hover:text-gray-300 transition'>
                          {edge!.node!.subtitle!}
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
  const variables = {};

  let data = {};
  try {
    data = (await staticRequest({
      query,
      variables,
    })) as {};
  } catch {}

  return {
    props: { data },
  };
};

export default Blog;
