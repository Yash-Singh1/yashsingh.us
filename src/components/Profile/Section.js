import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <br id={title.toLowerCase()} />
      <br />
      <span className='subheading'>
        {title}
      </span>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Section;
