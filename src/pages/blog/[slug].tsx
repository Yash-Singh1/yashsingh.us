import type { NextPage } from 'next';
import Head from 'next/head';
import { useTina } from 'tinacms/dist/edit-state';
import { staticRequest, gql } from 'tinacms';
import { Query } from '../../../.tina/__generated__/types';
import { Fragment } from 'react';

const query = gql`
  {
    getPostsList {
      edges {
        node {
          id
          data {
            title
          }
        }
      }
    }
  }
`;

const Blog: NextPage<{ slug: string; data: Query }> = function Blog(props) {
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  return (
    <div>
      <Head>
        <title>{"Saiansh (Yash) Singh's Blog"}</title>
      </Head>

      <main>
        {data.getPostsList
          ? data.getPostsList.edges!
              .slice(Number(props.slug) * 5 - 5, Number(props.slug) * 5)
              .map((edge) => {
                return <Fragment key={edge!.node!.id}>{edge!.node!.data.title}</Fragment>;
              })
          : null}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const postsListData = (await staticRequest({
    query: gql`
      {
        getPostsList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as Query;

  return {
    fallback: 'blocking',
    paths: new Array(Math.ceil(postsListData.getPostsList.edges!.length / 5)).map((_, i) => ({
      params: { slug: i + 1 },
    })),
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const variables = {};

  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    }) as {};
  } catch {}

  return {
    props: { slug, data },
  };
}

export default Blog;
