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
import type RepoInfo from '../../types/RepoInfo';
import BadgeSection from './BadgeSection';
import type SkillsGrouped from '../../types/skillsGrouped';
import Home from '../../types/Home';

interface ProfileProps {
  data: Home;
  repoInfo: { [key: string]: RepoInfo };
  skillsGrouped: SkillsGrouped;
}

function Profile({ data, repoInfo, skillsGrouped }: ProfileProps) {
  const [changedHash, changeHash] = useState<boolean>(false);

  function handleHashChange() {
    changeHash(true);
  }

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
    <Container className={`${coolBgStyles['cool-bg']} ${profileStyles['cool-bg']}`}>
      <Header title='Saiansh (Yash) Singh' intro="It's" large className={coolBgStyles['header']}>
        <Paragraph className='max-w-prose text-base'>{data ? data.description : ''}</Paragraph>
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
          <span className='par max-w-prose'>
            I have many interesting projects. Here are a few handpicked ones:
          </span>
          <div className={profileStyles['projects-container']}>
            {Object.keys(repoInfo).length > 0 && data ? (
              data.projects!.map((project, index) => (
                <RepoCard repo={repoInfo[project!]} key={index} />
              ))
            ) : (
              <>
                <Paragraph>
                  Please connect to the internet and ensure <code>GH_TOKEN</code> is a valid token
                  set with the following permissions:
                </Paragraph>
                <ul className={profileStyles['needed-permissions']}>
                  <li>
                    <code>public_repo</code>
                  </li>
                  <li>
                    <code>read:org</code>
                  </li>
                  <li>
                    <code>repo:status</code>
                  </li>
                  <li>
                    <code>repo_deployment</code>
                  </li>
                  <li>
                    <code>user</code>
                  </li>
                </ul>
              </>
            )}
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
        <BadgeSection description='I am proficient in' badges={skillsGrouped['proficient']} />
        <BadgeSection description='I am good at' badges={skillsGrouped['good']} />
        <BadgeSection description='I am learning' badges={skillsGrouped['learning']} />
      </Section>
      <Section title='More' handleHashChange={handleHashChange}>
        <Paragraph className='max-w-prose'>
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
