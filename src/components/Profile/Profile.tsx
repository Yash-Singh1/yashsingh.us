import Header from '../Header';
import Paragraph from '../Paragraph';
import Section from './Section';
import RepoCard from './RepoCard';
import Contacts from '../Contacts';
import Container from '../Container';
import Link from 'next/link';
import profileStyles from '../../styles/profile.module.scss';
import coolBgStyles from '../../styles/cool-bg.module.scss';
import GitHub from '../SimpleIconLogos/GitHub';
import Mail from '../SimpleIconLogos/Mail';
import type RepoInfo from '../../types/RepoInfo';
import type SkillsGrouped from '../../types/skillsGrouped';
import Home from '../../types/Home';
import BadgesSection from './BadgesSection';
import HandleHash from './HandleHash';
import LearnMore from './LearnMore';

interface ProfileProps {
  data: Home;
  repoInfo: { [key: string]: RepoInfo };
  skillsGrouped: SkillsGrouped;
}

function Profile({ data, repoInfo, skillsGrouped }: ProfileProps) {
  return (
    <Container
      className={`${coolBgStyles['cool-bg']} pt-0 xs:pt-0 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0`}
    >
      <Header
        title={
          <>
            <span className='hidden sm:inline'>Saiansh (</span>Yash
            <span className='hidden sm:inline'>)</span> Singh
          </>
        }
        intro="It's"
        large
        className={`${coolBgStyles['header']} snap-start pt-12`}
      >
        <Paragraph className='max-w-prose text-base'>{data ? data.description : ''}</Paragraph>
        <br />
        <LearnMore />
      </Header>
      <Section title='Projects'>
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
      <BadgesSection skillsGrouped={skillsGrouped} />
      <Section title='More'>
        <Paragraph className='max-w-prose'>
          I maintain a blog site with multiple posts on different topics related to programming at{' '}
          <Link href='/blog/' className='text-blue-500'>
            yashsingh.us/blog
          </Link>
          .
        </Paragraph>
        <Contacts
          contacts={[
            { name: 'Contacts', href: '/contacts', internal: true },
            {
              name: 'Email',
              href: 'mailto:me@yashsingh.us',
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
      <HandleHash />
    </Container>
  );
}

export default Profile;
