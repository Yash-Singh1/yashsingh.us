import { useEffect, useState } from 'react';
import Header from '../Header';
import Paragraph from './Paragraph';
import Section from './Section';
import Progress from './Progress';
import More from './More';
import RepoCard from './RepoCard';
import Contacts from '../Contacts';
import Container from '../Container';
import { Link } from 'react-router-dom';
import '../../styles/profile.css';
import AOS from 'aos';

function Profile() {
  const [loadedImages, loadImage] = useState([]);
  const [animateAgain, setAnimateAgain] = useState(true);

  const imageOnLoad = () => loadImage([...loadedImages, true]);

  useEffect(() => {
    if (location.hash && loadedImages.length === 6) {
      document.getElementById(location.hash.slice(1).toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [loadedImages]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Container className='box-content container-profile'>
      <Header title='Saiansh (Yash) Singh' intro="It's" large>
        <Paragraph>
          I am a programmer of the Bay Area. I program many cool stuff in a variety of languages, my best being JavaScript/TypeScript. I am better at
          frontend and work with React.
        </Paragraph>
        <br />
        <button
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 cursor-pointer rounded-lg outline-none par'
          onClick={() => (location.hash = '#projects')}
          type='button'
        >
          Learn More About Me
        </button>
      </Header>
      <Section title='Projects'>
        <div className='text-gray-400 text-xl mt-5'>
          <span id='project-note' className='par'>I have many interesting projects. Here are a few handpicked ones:</span>
          <div>
            <RepoCard repo='Yash-Singh1/epack' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/randomgen-parser' onLoad={imageOnLoad} />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/kanda-weather' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/eslint-plugin-userscripts' onLoad={imageOnLoad} />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/equation-slides' onLoad={imageOnLoad} />
            <RepoCard repo='Yash-Singh1/monkeyide' onLoad={imageOnLoad} />
          </div>
          <Paragraph className='text-blue-400 text-lg cursor-pointer'>
            <a href='https://github.com/Yash-Singh1/?tab=repositories&sort=stargazers'>See more...</a>
          </Paragraph>
        </div>
      </Section>
      <Section title='Skills'>
        <Paragraph>Here is a list of some of my skills and their progress:</Paragraph>
        <div id='skills-list'>
          <Progress skill='JavaScript' percent={80} />
          <Progress skill='React and Redux' percent={80} />
          <Progress skill='Version Control' percent={80} />
          <Progress skill='Chrome Extensions' percent={80} />
          <Progress skill='Bootstrap' percent={70} />
          <Progress skill='Tailwind CSS' percent={60} />
          <Progress skill='CoffeeScript' percent={60} />
          <More onHidden={() => setAnimateAgain(false)}>
            <Progress skill='CSS' percent={50} animate={animateAgain} />
            <Progress skill='Python' percent={50} animate={animateAgain} />
            <Progress skill='Typescript' percent={50} animate={animateAgain} />
            <Progress skill='C# in Unity' percent={50} animate={animateAgain} />
          </More>
        </div>
      </Section>
      <Section title='More'>
        <Paragraph>
          I maintain a blog site with multiple posts on different topics related to programming at{' '}
          <Link className='text-blue-500' to='/blog/?page=1'>
            http://www.yashsingh.us/blog/
          </Link>
          . I am also currently enrolled ⚡ Lawson Middle School (Lightning) ⚡.
        </Paragraph>
        <Contacts
          contacts={[
            { name: 'Blog', href: '/blog/?page=1', internal: true },
            { name: 'Email', href: 'mailto:saiansh2525@gmail.com' },
            { name: 'GitHub', href: 'https://github.com/Yash-Singh1' },
            { name: 'DevPage', href: 'https://dev.page/yash' }
          ]}
        />
      </Section>
    </Container>
  );
}

export default Profile;
