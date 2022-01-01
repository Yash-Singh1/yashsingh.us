import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';

/**
 * Converts a programming language ID into a react-syntax-highlighter compatible one
 * @param {string} lang The string to convert
 * @returns {string} The compatible language ID
 */
function reactSyntaxHighlighterLanguage(lang) {
  switch (lang) {
    case 'javascript':
    case 'js':
      return 'javascript';
    case 'typescript':
    case 'ts':
      return 'typescript';
    case 'md':
    case 'markdown':
      return 'markdown';
    case 'html':
      return 'htmlbars';
    case 'sh':
    case 'shell':
      return 'shell';
    case 'py':
    case 'python':
      return 'python';
    default:
      return lang;
  }
}

function Code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter language={reactSyntaxHighlighterLanguage(match[1])} PreTag='div' useInlineStyles={false} {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

Code.propTypes = {
  className: PropTypes.string
};

export default Code;
