import { useEffect, useState, useRef } from 'react';
import Header from '../Header';
import Paragraph from '../Paragraph';
import Section from './Section';
import Progress from './Progress';
import More from './More';
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

interface ProfileProps {
  data: Home;
  repoInfo: { [key: string]: RepoInfo };
}

function Profile({ data, repoInfo }: ProfileProps) {
  const [animateAgain, setAnimateAgain] = useState<boolean>(true);
  const [changedHash, changeHash] = useState<boolean>(false);
  const progressbarsRef = useRef<HTMLDivElement>(null);

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
      <Section title='Projects'>
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
            <a href='https://github.com/Yash-Singh1/?tab=repositories&sort=stargazers'>
              See more...
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section title='Skills'>
        <Paragraph>Here is a list of some of my skills and their progress:</Paragraph>
        <div className={profileStyles['skills-list']} ref={progressbarsRef}>
          {data
            ? data
                .skills!.slice(0, 8)
                .map((skill) => (
                  <Progress
                    key={skill!.name}
                    skill={skill!.name as string}
                    percent={skill!.percentage as number}
                    reference={progressbarsRef}
                  />
                ))
            : null}
          <More onHidden={() => setAnimateAgain(false)}>
            {data
              ? data
                  .skills!.slice(8)
                  .map((skill) => (
                    <Progress
                      key={skill!.name}
                      skill={skill!.name as string}
                      percent={skill!.percentage as number}
                      reference={progressbarsRef}
                      animate={animateAgain}
                    />
                  ))
              : null}
          </More>
        </div>
      </Section>
      <Section title='More'>
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
