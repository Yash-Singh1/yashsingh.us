import PropTypes from 'prop-types';

function Container({ children, className }) {
  return (
    <div
      className={`py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto h-full ${className || ''}`}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
