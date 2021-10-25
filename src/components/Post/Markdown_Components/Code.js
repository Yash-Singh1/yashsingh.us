import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';

function Code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag='div' useInlineStyles={false} {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

Code.propTypes = {
  className: PropTypes.string
};

export default Code;
