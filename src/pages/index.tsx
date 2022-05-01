import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/Profile/Profile';
import { useTina } from 'tinacms/dist/edit-state';
import { gql, staticRequest } from 'tinacms';
import { Query } from '../../.tina/__generated__/types';

const query = gql`
  {
    getHomeDocument(relativePath: "Home.json") {
      data {
        description
        projects
        skills {
          name
          percentage
          priority
        }
      }
    }
  }
`;

const Home: NextPage<{ data: Query }> = (props) => {
  const { data } = useTina<Query>({
    query,
    variables: {},
    data: props.data,
  });

  return (
    <div>
      <Head>
        <title>Saiansh (Yash) Singh</title>
        <meta
          name='description'
          content="Hey There! It's Saiansh (Yash) Singh. I am a middle school programmer working on many different cool, stuff. This is my personal website + blog."
        />
        <meta property='og:type' content='website' />
      </Head>

      <main>
        <Profile data={data.getHomeDocument.data} />
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  let data: Query = {} as Query;
  try {
    data = (await staticRequest({
      query,
      variables: {},
    })) as Query;
  } catch {}

  return {
    props: {
      data,
    },
  };
};

export default Home;
