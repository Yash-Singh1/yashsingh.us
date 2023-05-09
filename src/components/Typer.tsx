'use client';

/* Thanks to https://dev.to/shareef/typing-effect-in-react-with-typed-js-and-hooks-5bl2 for initial implementation */

import Typed, { type TypedOptions } from 'typed.js';
import { useEffect, useRef } from 'react';

function Typer(config: TypedOptions) {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, config);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

export default Typer;
