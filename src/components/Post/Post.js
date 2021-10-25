import React from 'react';
import Container from '../Container';
import Contacts from '../Contacts';
import Loader from '../Loader';
import Code from './Markdown_Components/Code';
import '../../styles/post.css';
import HeadingFactory from './Markdown_Components/HeadingFactory';
import usePosts from '../../hooks/usePosts';

function Post({
  match: {
    params: { post }
  }
}) {
  const posts = usePosts();

  const postInfo = posts ? posts.default[posts.filenames.indexOf(/([^/]*?)(\.[^/.]*?)?$/.exec(post)[1])] : undefined;

  return postInfo ? (
    <Container>
      <img src={postInfo.image} className='w-1/2 max-h-80 object-center mx-auto' />
      <br />
      <br />
      <h1 class='font-semibold text-6xl text-purple-700 text-center uppercase tracking-wider'>{postInfo.title}</h1>
      <h1 class='font-semibold text-2xl font-mono text-purple-500 text-center mt-2'>{postInfo.subtitle}</h1>
      <p class='font-semibold text-medium font-mono text-purple-300 text-center italic mt-2'>
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
          { name: 'About', href: '/' },
          { name: 'Blog', href: '/blog/?page=1' },
          { name: 'Email', href: 'mailto:saiansh2525@gmail.com' },
          { name: 'GitHub', href: 'https://github.com/Yash-Singh1' }
        ]}
      />
    </Container>
  ) : (
    <Loader />
  );
}

export default Post;
