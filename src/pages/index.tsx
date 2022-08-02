import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/Profile/Profile';
import gql from '../helpers/passthrough';
import { useEffect } from 'react';
import AOS from 'aos';
import { graphql } from '@octokit/graphql';
import type RepoInfo from '../types/RepoInfo';
import type SkillsGrouped from '../types/skillsGrouped';
import { default as HomeType } from '../types/Home';

const Home: NextPage<{
  data: HomeType;
  repoInfo: { [key: string]: RepoInfo };
  skillsGrouped: SkillsGrouped;
}> = (props) => {
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
        <Profile data={props.data} repoInfo={props.repoInfo} skillsGrouped={props.skillsGrouped} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let data: HomeType;
  try {
    ({ default: data } = (await import('../../content/home/Home.json')) as { default: HomeType });
  } catch {}
  let repoInfo: {
    [key: string]: RepoInfo;
  } = {};
  try {
    for (const project of data!.projects) {
      const repo = await graphql<RepoInfo>(
        gql`
          query RepositoryInfo($name: String!, $owner: String!) {
            repository(name: $name, owner: $owner) {
              description
              primaryLanguage {
                color
                name
              }
              stargazerCount
              forkCount
              name
              url
            }
          }
        `,
        {
          name: project!,
          owner: 'Yash-Singh1',
          headers: {
            authorization: `bearer ${process.env.GH_TOKEN}`,
          },
        }
      );
      repoInfo[project!] = repo;
    }
  } catch (error) {
    console.log(error);
  }

  const skillsGrouped: SkillsGrouped = {};
  for (const skill of data!.skills) {
    if (!skillsGrouped[skill!.status!]) {
      skillsGrouped[skill!.status!] = [];
    }
    skillsGrouped[skill!.status!]!.push(skill!);
  }

  return {
    props: {
      data: data!,
      repoInfo,
      skillsGrouped,
    },
    revalidate: 60 * 60, // Rebuild every hour
  };
};

export default Home;
