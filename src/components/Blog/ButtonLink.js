import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

function ButtonLink({ children, to, className }) {
  const navigate = useNavigate();

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer outline-none ${
        className || ''
      }`}
      onClick={() => navigate(to)}
      type='button'
    >
      {children}
    </button>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ButtonLink;
