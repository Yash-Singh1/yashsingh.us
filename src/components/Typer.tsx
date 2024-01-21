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

export function DefaultTyper() {
  return (
    <Typer
      preStringTyped={function () {
        while (
          (this.strings[this.arrayPos].length > 12 && window.innerWidth <= 480) ||
          (this.strings[this.arrayPos].length > 9 && window.innerWidth <= 320)
        ) {
          if (this.arrayPos === this.strings.length - 1) {
            if (this.loop) {
              this.arrayPos = 0;
            }
          } else {
            this.arrayPos++;
          }
        }
        if (window.innerWidth <= 320) {
          return this.strings[this.arrayPos].replace('...', '');
        }
        return this.strings[this.arrayPos];
      }}
      strings={[
        'websites',
        'vscode extensions',
        'desktop applications',
        'jQuery plugins',
        'mobile apps',
        'games',
        'formatters',
        'chrome extensions',
        'CLIs',
        'APIs',
        'trees',
        'JSON Schemas',
        'libraries',
        'parsers',
        'grammars',
        'functions',
        'discord servers',
        'notebooks',
        'chat bots',
        'algorithms',
        'projects',
        'linters',
        'ml models',
        'lsps',
        'solutions',
        'eslint plugins',
        'shell scripts',
        'slides',
        'identities',
        'tests',
        'editor plugins',
        'equations',
        'react hooks',
        'documentation',
        'graphs',
        'react components',
        'vue components',
        'workshops',
        'github actions',
        'charts',
        'discord bots',
        'userscripts',
        'data structures',
        'zsh plugins',
        'videos',
        'google workspace addons',
        'ideas',
        'visualizations',
        'blog posts',
        'game mods',
        'data structures',
        'utilities',
        'animations',
        'user interfaces',
        'packages',
        'vue composables',
        'editors',
        'configuration',
        'consoles',
        'AutoHotKey scripts',
        'chat apps',
        'typescript declarations',
        'regexps',
        'code snippets',
        'bitburner scripts',
        'templates',
        'releases',
        'databases',
      ].map((str) => str + '...')}
      typeSpeed={50}
      backSpeed={40}
      backDelay={2000}
      loop
    />
  );
}

export default Typer;
