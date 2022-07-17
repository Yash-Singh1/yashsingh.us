import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/Profile/Profile';
import { useTina } from 'tinacms/dist/edit-state';
import { gql, staticRequest } from 'tinacms';
import { Query } from '../../.tina/__generated__/types';
import { useEffect, useState } from 'react';
import AOS from 'aos';

const query = gql`
  {
    home(relativePath: "Home.json") {
      description
      projects
      skills {
        name
        percentage
        priority
      }
    }
  }
`;

const Home: NextPage<{ data: Query }> = (props) => {
  const [{ data }, setData] = useState<{ data: Query }>(
    useTina<Query>({
      query,
      variables: {},
      data: props.data,
    })
  );

  useEffect(() => {
    data.home.skills!.sort((skillA, skillB) => {
      if (skillA!.percentage! > skillB!.percentage!) return -1;
      else if (skillA!.percentage! < skillB!.percentage!) return 1;
      if (skillA!.priority! > skillB!.priority!) return -1;
      else if (skillA!.priority! < skillB!.priority!) return 1;
      return 0;
    });
    setData({ data });
  }, [data]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Head>
        <title>Saiansh (Yash) Singh</title>
        <meta
          name='description'
          content="Hey There! It's Saiansh (Yash) Singh. I am a middle school programmer working on many different cool, stuff. This is my personal website + blog."
        />
        <meta property='og:type' content='website' />
      </Head>

      <main>
        <Profile data={data.home} />
      </main>
    </>
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
