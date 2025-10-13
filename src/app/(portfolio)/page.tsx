import type { Metadata } from 'next';
import Profile from '../../components/Profile/Profile';
import gql from '../../helpers/passthrough';
import { graphql } from '@octokit/graphql';
import type RepoInfo from '../../types/RepoInfo';
import type SkillsGrouped from '../../types/skillsGrouped';
import { default as HomeType } from '../../types/Home';
import Footer from '@/components/Footer';

async function getCMSContent() {
  // Use import() to prevent dependency on execution context
  const data = (await import('../../../content/home/Home.json')) as HomeType;

  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Yash Singh - yashsingh.us',
    description:
      'I am a high schooler who enjoys programming in his free time. One of my other hobbies is basketball. Intern @ t3.chat',
    openGraph: {
      title: 'Yash Singh - yashsingh.us',
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
          request: {
            fetch,
          },
        },
      );
      repoInfo[project!] = repo;
    }
  } catch (error) {
    console[process.env.NODE_ENV === 'development' ? 'warn' : 'error'](
      'GitHub GraphQL Error',
      error,
    );
  }

  const skillsGrouped: SkillsGrouped = {
    proficient: [],
    good: [],
    learning: [],
  };

  for (const skill of data!.skills) {
    skillsGrouped[skill!.status!]!.push(skill!);
  }

  return (
    <main className='overscroll-y-contain overflow-y-scroll max-h-screen scroll-smooth'>
      <Profile data={data} repoInfo={repoInfo} skillsGrouped={skillsGrouped} />
      <Footer className='snap-end' />
    </main>
  );
}
