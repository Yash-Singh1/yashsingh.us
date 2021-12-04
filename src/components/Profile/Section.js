import PropTypes from 'prop-types';

function Section({ title, children }) {
  const hash = title.toLowerCase().replace(' ', '-');
  return (
    <div className='min-h-full section' id={hash}>
      <div data-aos='slide-right'>
        <br />
        <br />
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
