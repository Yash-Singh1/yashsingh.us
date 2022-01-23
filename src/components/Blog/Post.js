import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import badgeColorMap from '../../helpers/badgeColorMap.json';

function Post({ ...frontmatter }) {
  const LinkComponent = frontmatter.link ? 'a' : Link;
  const linkProps = frontmatter.link
    ? { href: frontmatter.link, target: '_blank' }
    : { to: `/blog/post/${frontmatter.filename}` };

  return (
    <>
      <LinkComponent {...linkProps} className='group'>
        <span id='title'>{frontmatter.title}</span>
        {(frontmatter.keywords || []).map((keyword, index) => (
          <span
            key={index}
            className={`par inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-bold leading-none text-red-100 ${badgeColorMap[keyword]} rounded-full relative h-6 bottom-1`}
          >
            {keyword}
          </span>
        ))}
        <p id='subtitle' className='par'>
          {frontmatter.subtitle}
        </p>
        <i id='info' className='par'>
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
  date: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

export default Post;
