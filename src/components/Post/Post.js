import React from 'react';
import Container from '../Container';
import Contacts from '../Contacts';
import Loader from '../Loader';
import Code from './Markdown_Components/Code';
import '../../styles/post.css';
import HeadingFactory from './Markdown_Components/HeadingFactory';
import usePosts from '../../hooks/usePosts';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Post() {
  const { post } = useParams();

  const posts = usePosts();

  const filenameIndex = posts ? posts.filenames.indexOf(/([^/]*?)(\.[^/.]*?)?$/.exec(post)[1]) : undefined;
  const postInfo = posts ? posts.default[filenameIndex] : undefined;

  return postInfo ? (
    <Container>
      <Link to={`/blog/?page=${(filenameIndex - (filenameIndex % 5)) / 5 + 1}`} className='lg:bottom-10 xl:bottom-18 2xl:bottom-26 text-blue-500 relative text-2xl'>
        ← Back to blog
      </Link>
      <img src={postInfo.image} className='w-1/2 max-h-80 object-center mx-auto' />
      <br />
      <br />
      <h1 className='font-semibold text-6xl text-purple-700 text-center uppercase tracking-wider'>{postInfo.title}</h1>
      <h1 className='font-semibold text-2xl font-mono text-purple-500 text-center mt-2'>{postInfo.subtitle}</h1>
      <p className='font-semibold text-medium font-mono text-purple-300 text-center italic mt-2'>
        Posted by {postInfo.author} on {postInfo.date}
      </p>
      <br />
      <br />
      <article className='markdown-body text-white'>
        <postInfo.default components={{ code: Code, h1: HeadingFactory(1), h2: HeadingFactory(2), h3: HeadingFactory(3) }} />
      </article>
      <Contacts
        className='text-center'
        contacts={[
          { name: 'About', href: '/', internal: true },
          { name: 'Blog', href: '/blog/?page=1', internal: true },
          { name: 'Email', href: 'mailto:saiansh2525@gmail.com' },
          { name: 'GitHub', href: 'https://github.com/Yash-Singh1' },
          { name: 'DevPage', href: 'https://dev.page/yash' }
        ]}
      />
    </Container>
  ) : (
    <Loader />
  );
}

export default Post;
