import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTina } from 'tinacms/dist/edit-state';
import { staticRequest, gql } from 'tinacms';
import { Query } from '../../../.tina/__generated__/types';
import blogStyles from '../../styles/blog.module.scss';

const query = gql`
  {
    postsConnection(sort: "date", first: 100) {
      edges {
        node {
          id
          title
          subtitle
          image
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
    <div style={{ backgroundColor: 'white' }}>
      <Head>
        <title>{"Saiansh (Yash) Singh's Blog"}</title>
      </Head>

      <main>
        {data.postsConnection
          ? data.postsConnection
              .edges!.reverse()
              .reduce((allPosts: Query['postsConnection']['edges'][], post, postIndex) => {
                if (postIndex % 3 === 0) {
                  allPosts.push([post]);
                } else {
                  allPosts[allPosts.length - 1]!.push(post);
                }
                return allPosts;
              }, [])
              .map((edgeGroup, index) => {
                console.log(edgeGroup);
                return (
                  <section key={index} className={blogStyles['section']}>
                    {edgeGroup?.map((edge) => (
                      <div key={edge!.node!.id}>
                        <div role='img'>
                          <img src={edge!.node!.image!} alt={edge!.node!.title!} />
                        </div>
                        <h1>{edge!.node!.title!}</h1>
                        <p className='text-gray-400'>{edge!.node!.subtitle!}</p>
                      </div>
                    ))}
                  </section>
                );
              })
          : null}
      </main>
    </div>
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
