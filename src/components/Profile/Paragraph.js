import PropTypes from 'prop-types';
import { overrideTailwindClasses } from 'tailwind-override';

function Paragraph({ children, className = '', ...props }) {
  return (
    <p
      className={overrideTailwindClasses(`text-gray-400 text-xl w-3/4 mt-5 par ${className}`)}
      {...props}
    >
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Paragraph;
