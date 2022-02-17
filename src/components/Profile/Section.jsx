import PropTypes from 'prop-types';

function Section({ title, children }) {
  const hash = title.toLowerCase().replace(' ', '-');
  return (
    <div className='full-min-h section' id={hash}>
      <div data-aos='slide-right'>
        <span
          className='subheading'
          onClick={() => {
            location.hash = `#${hash}`;
          }}
        >
          {title}
        </span>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Section;
