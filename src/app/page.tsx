import type { Metadata } from 'next';
import Profile from '../components/Profile/Profile';
import gql from '../helpers/passthrough';
import { graphql } from '@octokit/graphql';
import type RepoInfo from '../types/RepoInfo';
import type SkillsGrouped from '../types/skillsGrouped';
import { default as HomeType } from '../types/Home';

async function getCMSContent() {
  const { default: data } = (await import('../../content/home/Home.json')) as { default: HomeType };
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCMSContent();
  return {
    title: 'Saiansh (Yash) Singh - yashsingh.us',
    description: data.description,
    openGraph: {
      type: 'website',
    },
  };
}

export const revalidate = 86400;

export const runtime = 'nodejs';

export default async function Home() {
  const data = await getCMSContent();
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
    console.error(error);
  }

  const skillsGrouped: SkillsGrouped = {};
  for (const skill of data!.skills) {
    if (!skillsGrouped[skill!.status!]) {
      skillsGrouped[skill!.status!] = [];
    }
    skillsGrouped[skill!.status!]!.push(skill!);
  }

  return (
    <main>
      <Profile data={data} repoInfo={repoInfo} skillsGrouped={skillsGrouped} />
    </main>
  );
}
