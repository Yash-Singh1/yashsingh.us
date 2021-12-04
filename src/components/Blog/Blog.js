import Container from '../Container';
import Header from '../Header';
import Post from './Post';
import Contacts from '../Contacts';
import Loader from '../Loader';
import ButtonLink from './ButtonLink';
import '../../styles/blog.css';
import usePosts from '../../hooks/usePosts';
import { useLocation } from 'react-router';

function Blog() {
  const posts = usePosts();

  const page = new URLSearchParams(useLocation().search).get('page') || 1;

  return posts ? (
    <Container>
      <Header title="Yash Singh's Blog" intro='Welcome to' />
      <br />
      {posts.default.slice(page * 5 - 5, page * 5).map((post, index) => (
        <Post key={index} {...post} filename={posts.filenames[index + (page * 5 - 5)]} />
      ))}
      {page > 1 ? <ButtonLink to={`/blog/?page=${Number(page) - 1}`}>Newer Posts</ButtonLink> : null}
      {page * 5 >= posts.default.length ? null : (
        <ButtonLink to={`/blog/?page=${Number(page) + 1}`} className={page > 1 ? 'ml-5' : ''}>
          Older Posts
        </ButtonLink>
      )}
      <br />
      <br />
      <Contacts
        contacts={[
          { name: 'About', href: '/', internal: true },
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

export default Blog;
