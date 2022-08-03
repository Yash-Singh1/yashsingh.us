/* Thanks to https://dev.to/shareef/typing-effect-in-react-with-typed-js-and-hooks-5bl2 for initial implementation */

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { TypedOptions } from 'typed.js';

function Typer(config: TypedOptions) {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, config);

    return () => {
      typed.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={el}></span>;
}

export default Typer;
