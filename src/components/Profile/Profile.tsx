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

function Profile() {
  const [loadedImages, loadImage] = useState<boolean[]>([]);
  const [animateAgain, setAnimateAgain] = useState<boolean>(true);
  const [changedHash, changeHash] = useState<boolean>(false);
  const progressbarsRef = useRef<HTMLDivElement>(null);

  const imageOnLoad = () => loadImage([...loadedImages, true]);

  useEffect(() => {
    if ((location.hash && loadedImages.length === 6) || changedHash === true) {
      document
        .querySelector(`#${location.hash.slice(1).toLowerCase()}`)
        ?.scrollIntoView({ behavior: 'smooth' });
      if (changedHash) changeHash(false);
    }
  }, [changedHash, loadedImages]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Container className={`box-content ${coolBgStyles['cool-bg']} ${profileStyles['cool-bg']}`}>
      <Header title='Saiansh (Yash) Singh' intro="It's" large className={profileStyles['header']}>
        <Paragraph>
          I am a programmer of the Bay Area. I program many cool stuff in a variety of languages, my
          best being JavaScript/TypeScript. I am best at frontend and work with React.
        </Paragraph>
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
        <div className='text-gray-400 text-xl mt-5'>
          <span className={`${profileStyles['project-note']} par`}>
            I have many interesting projects. Here are a few handpicked ones:
          </span>
          <div>
            <RepoCard repo='Yash-Singh1/epack' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/eslint-plugin-userscripts' onLoad={imageOnLoad} />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/ball-royale' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/randomgen-parser' onLoad={imageOnLoad} />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/dotfiles' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/competitive-programming' onLoad={imageOnLoad} />
          </div>
          <Paragraph className='text-blue-400 text-lg cursor-pointer'>
            <a href='https://github.com/Yash-Singh1/?tab=repositories&sort=stargazers'>
              See more...
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section title='Skills'>
        <Paragraph>Here is a list of some of my skills and their progress:</Paragraph>
        <div className={profileStyles['skills-list']} ref={progressbarsRef}>
          <Progress skill='JavaScript' percent={80} reference={progressbarsRef} />
          <Progress skill='React and Redux' percent={80} reference={progressbarsRef} />
          <Progress skill='Version Control' percent={80} reference={progressbarsRef} />
          <Progress skill='Chrome Extensions' percent={80} reference={progressbarsRef} />
          <Progress skill='Typescript' percent={70} reference={progressbarsRef} />
          <Progress skill='Python' percent={70} reference={progressbarsRef} />
          <Progress skill='C++' percent={60} reference={progressbarsRef} />
          <Progress skill='CSS' percent={60} reference={progressbarsRef} />
          <More onHidden={() => setAnimateAgain(false)}>
            <Progress skill='Bootstrap' percent={60} reference={progressbarsRef} animate={animateAgain} />
            <Progress skill='Tailwind CSS' percent={60} reference={progressbarsRef} animate={animateAgain} />
            <Progress skill='CoffeeScript' percent={60} reference={progressbarsRef} animate={animateAgain} />
            <Progress skill='C# in Unity' percent={50} reference={progressbarsRef} animate={animateAgain} />
          </More>
        </div>
      </Section>
      <Section title='More'>
        <Paragraph>
          I maintain a blog site with multiple posts on different topics related to programming at{' '}
          <Link href='/blog/?page=1'>
            <a className='text-blue-500'>https://www.yashsingh.us/blog/</a>
          </Link>
          . I am also currently enrolled ⚡ Lawson Middle School (Lightning) ⚡.
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
