import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className='py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto'>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
