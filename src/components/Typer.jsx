/* Thanks to https://dev.to/shareef/typing-effect-in-react-with-typed-js-and-hooks-5bl2 for initial implementation */

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Typer({ ...config }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, config);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

Typer.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
  stringsElements: PropTypes.oneOfType([PropTypes.instanceOf(HTMLElement), PropTypes.string]),
  typeSpeed: PropTypes.number,
  startDelay: PropTypes.number,
  backSpeed: PropTypes.number,
  smartBackspace: PropTypes.bool,
  shuffle: PropTypes.bool,
  backDelay: PropTypes.number,
  fadeOut: PropTypes.bool,
  fadeOutClass: PropTypes.string,
  fadeOutDelay: PropTypes.number,
  loop: PropTypes.bool,
  loopCount: PropTypes.number,
  showCursor: PropTypes.bool,
  cursorChar: PropTypes.string,
  autoInsertCss: PropTypes.bool,
  attr: PropTypes.string,
  bindInputFocusEvents: PropTypes.bool,
  contentType: PropTypes.oneOf(['html', 'null'])
};

export default Typer;
