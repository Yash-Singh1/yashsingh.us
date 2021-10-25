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

function Profile() {
  return (
    <Container>
      <Header title='Saiansh (Yash) Singh' intro="It's" />
      <Section title='About'>
        <Paragraph>
          I am a dude programming stuff in the Bay Area. I love learning new things and facing challenges and bugs. Without them, I am bored (or I
          create more bugs!). I can program in multiple different languages, the one I can code the coolest stuff in is JavaScript. I play a lot of
          basketball.
        </Paragraph>
      </Section>
      <Section title='Projects'>
        <div className='text-gray-400 text-xl mt-5'>
          <span id='project-note'>I have many interesting projects. Here are a few handpicked ones:</span>
          <div>
            <RepoCard repo='Yash-Singh1/epack' />
            <RepoCard repo='Yash-Singh1/randomgen-parser' />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/kanda-weather' />
            <RepoCard repo='Yash-Singh1/eslint-plugin-userscripts' />
          </div>
          <div>
            <RepoCard repo='Yash-Singh1/equation-slides' />
            <RepoCard repo='Yash-Singh1/monkeyide' />
          </div>
        </div>
      </Section>
      <Section title='Skills'>
        <Paragraph>Here is a list of some of my skills and their progress:</Paragraph>
        <div id='skills'>
          <Progress skill='JavaScript' percent={80} />
          <Progress skill='React and Redux' percent={80} />
          <Progress skill='Version Control' percent={80} />
          <Progress skill='Chrome Extensions' percent={80} />
          <Progress skill='Bootstrap' percent={70} />
          <Progress skill='Tailwind CSS' percent={60} />
          <Progress skill='CoffeeScript' percent={60} />
          <More>
            <Progress skill='CSS' percent={50} />
            <Progress skill='Python' percent={50} />
            <Progress skill='Typescript' percent={50} />
            <Progress skill='C# in Unity' percent={50} />
          </More>
        </div>
      </Section>
      <Section title='Blog'>
        <Paragraph>
          I maintain a blog site with multiple posts on different topics related to programming at{' '}
          <Link className='text-blue-500' to='/blog/?page=1'>
            http://www.yashsingh.us/blog/
          </Link>
          .
        </Paragraph>
      </Section>
      <Section title='School'>
        <Paragraph>I am currently in Lawson Middle School.</Paragraph>
      </Section>
      <Section title='Contact Me'>
        <Contacts
          contacts={[
            { name: 'Email', href: 'mailto:saiansh2525@gmail.com' },
            { name: 'GitHub', href: 'https://github.com/Yash-Singh1' }
          ]}
        />
      </Section>
    </Container>
  );
}

export default Profile;
