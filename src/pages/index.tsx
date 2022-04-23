import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/Profile/Profile';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Saiansh (Yash) Singh</title>
        <meta
          name='description'
          content="Hey There! It's Saiansh (Yash) Singh. I am a middle school programmer working on many different cool, stuff. This is my personal website + blog."
        />
      </Head>

      <main>
        <Profile />
      </main>
    </div>
  );
};

export default Home;
