import PropTypes from 'prop-types';

function getInnerText(children) {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    return children.map(getInnerText).join('');
  } else if (!children.props.children) {
    return '';
  } else {
    return getInnerText(children.props.children);
  }
}

function HeadingFactory(level) {
  return Object.assign(
    ({ children }) => {
      const innerText = getInnerText(children)
        .toLowerCase()
        .replace(/[^\w]+/g, '-');
      const LevelHeading = `h${level}`;
      return (
        <LevelHeading id={innerText} className='section-heading'>
          <a href={`#${innerText}`}>{children}</a>
        </LevelHeading>
      );
    },
    { propTypes: { children: PropTypes.node } }
  );
}

export default HeadingFactory;
