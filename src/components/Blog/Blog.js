import Container from '../Container';
import Header from '../Header';
import Post from './Post';
import Contacts from '../Contacts';
import Loader from '../Loader';
import ButtonLink from './ButtonLink';
import '../../styles/blog.css';
import usePosts from '../../hooks/usePosts';
import { useLocation } from 'react-router';
import filenames from '../../data/filenames.json';

function Blog() {
  const { info } = usePosts(false);

  const page = new URLSearchParams(useLocation().search).get('page') || 1;

  return info ? (
    <Container>
      <Header title="Yash Singh's Blog" intro='Welcome to' />
      <br />
      {Object.values(info)
        .slice(page * 5 - 5, page * 5)
        .map((info) => (
          <Post
            key={info.index}
            {...info}
            filename={/([^/]*?)(\.[^/.]*?)?$/.exec(filenames[info.index + (page * 5 - 5)])[1]}
          />
        ))}
      {page > 1 ? (
        <ButtonLink to={`/blog/?page=${Number(page) - 1}`}>Newer Posts</ButtonLink>
      ) : null}
      {page * 5 >= info.length ? null : (
        <ButtonLink to={`/blog/?page=${Number(page) + 1}`} className={page > 1 ? 'ml-5' : ''}>
          Older Posts
        </ButtonLink>
      )}
      <br />
      <br />
      <Contacts
        contacts={[
          { name: 'About', href: '/', internal: true },
          { name: 'Contacts', href: '/contacts', internal: true },
          { name: 'Email', href: 'mailto:saiansh2525@gmail.com' },
          { name: 'GitHub', href: 'https://github.com/Yash-Singh1' }
        ]}
      />
    </Container>
  ) : (
    <Loader />
  );
}

export default Blog;
