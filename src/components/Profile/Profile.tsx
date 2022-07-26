import { useEffect, useState } from 'react';
import Header from '../Header';
import Paragraph from '../Paragraph';
import Section from './Section';
import RepoCard from './RepoCard';
import Contacts from '../Contacts';
import Container from '../Container';
import Link from 'next/link';
import profileStyles from '../../styles/profile.module.scss';
import coolBgStyles from '../../styles/cool-bg.module.scss';
import AOS from 'aos';
import GitHub from '../SimpleIconLogos/GitHub';
import Mail from '../SimpleIconLogos/Mail';
import { Home } from '../../../.tina/__generated__/types';
import type RepoInfo from '../../types/RepoInfo';
import BadgeSection from './BadgeSection';

interface ProfileProps {
  data: Home;
  repoInfo: { [key: string]: RepoInfo };
}

interface SkillsGrouped {
  [key: string]: Home['skills'];
}

function Profile({ data, repoInfo }: ProfileProps) {
  const [changedHash, changeHash] = useState<boolean>(false);
  const [groupedSkills, setGroupedSkills] = useState<SkillsGrouped | null>(null);

  function handleHashChange() {
    changeHash(true);
  }

  useEffect(() => {
    if (data) {
      const skillsGrouped: SkillsGrouped = {};
      data.skills!.forEach!((skill) => {
        if (!skillsGrouped[skill!.status!]) {
          skillsGrouped[skill!.status!] = [];
        }
        skillsGrouped[skill!.status!]!.push(skill!);
      });
      setGroupedSkills(skillsGrouped);
    }
  }, [data]);

  useEffect(() => {
    if (location.hash || changedHash === true) {
      document
        .querySelector(`#${location.hash.slice(1).toLowerCase()}`)
        ?.scrollIntoView({ behavior: 'smooth' });
      if (changedHash) changeHash(false);
    }
  }, [changedHash]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Container className={`box-content ${coolBgStyles['cool-bg']} ${profileStyles['cool-bg']}`}>
      <Header title='Saiansh (Yash) Singh' intro="It's" large className={profileStyles['header']}>
        <Paragraph>{data ? data.description : ''}</Paragraph>
        <br />
        <button
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 cursor-pointer rounded-lg outline-none par'
          onClick={() => {
            location.hash = '#projects';
            changeHash(true);
          }}
          type='button'
        >
          Learn More About Me
        </button>
      </Header>
      <Section title='Projects' handleHashChange={handleHashChange}>
        <div className={`text-gray-400 text-xl mt-5`}>
          <span className='par'>
            I have many interesting projects. Here are a few handpicked ones:
          </span>
          <div className={profileStyles['projects-container']}>
            {data
              ? data.projects!.map((project, index) => (
                  <RepoCard repo={repoInfo[project!]} key={index} />
                ))
              : null}
          </div>
          <Paragraph className='text-blue-400 text-xl cursor-pointer'>
            <a
              href='https://github.com/Yash-Singh1/?tab=repositories&sort=stargazers'
              target='_blank'
              rel='noreferrer'
            >
              See more...
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section title='Skills' handleHashChange={handleHashChange}>
        <BadgeSection
          description='I am proficient in'
          badges={groupedSkills ? groupedSkills['proficient'] : undefined}
        />
        <BadgeSection
          description='I am good at'
          badges={groupedSkills ? groupedSkills['good'] : undefined}
        />
        <BadgeSection
          description='I am learning'
          badges={groupedSkills ? groupedSkills['learning'] : undefined}
        />
      </Section>
      <Section title='More' handleHashChange={handleHashChange}>
        <Paragraph>
          I maintain a blog site with multiple posts on different topics related to programming at{' '}
          <Link href='/blog/'>
            <a className='text-blue-500'>https://www.yashsingh.us/blog/</a>
          </Link>
          .
        </Paragraph>
        <Contacts
          contacts={[
            { name: 'Contacts', href: '/contacts', internal: true },
            {
              name: 'Email',
              href: 'mailto:saiansh2525@gmail.com',
              logo: <Mail className='logo-small' />,
            },
            {
              name: 'GitHub',
              href: 'https://github.com/Yash-Singh1',
              logo: <GitHub className='logo-small' />,
            },
          ]}
        />
      </Section>
    </Container>
  );
}

export default Profile;
