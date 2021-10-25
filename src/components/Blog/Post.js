import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ ...frontmatter }) {
  const LinkComponent = frontmatter.link ? 'a' : Link;
  const linkProps = frontmatter.link ? { href: frontmatter.link, target: '_blank' } : { to: `/blog/post/${frontmatter.filename}` };

  return (
    <>
      <LinkComponent {...linkProps} className='group'>
        <span id='title'>{frontmatter.title}</span>
        <p id='subtitle'>{frontmatter.subtitle}</p>
        <i id='info'>
          Posted by {frontmatter.author} on {frontmatter.date}
        </i>
      </LinkComponent>
      <br />
      <br />
    </>
  );
}

Post.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  filename: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Post;
