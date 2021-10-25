import PropTypes from 'prop-types';

function Paragraph({ children }) {
  return <p className='text-gray-400 text-xl w-3/4 mt-5'>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node
};

export default Paragraph;
