import Typer from './Typer';
import type { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  intro: string;
  children?: ReactNode;
  large?: boolean;
  className?: string;
}

function Header({ title, intro, children = null, large = false, className = '' }: HeaderProps) {
  return (
    <div className={`${large ? 'min-h-screen' : ''} header ${className}`}>
      <h1 className='font-semibold sm:text-xl text-lg font-mono text-violet-700'>
        Hey there 😃! {intro}
      </h1>
      <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl text-gray-200 mt-5'>{title}</h1>
      <h1 className='font-semibold md:text-2xl sm:text-xl text-lg font-mono text-violet-700 mt-5'>
        Working on{' '}
        <Typer
          preStringTyped={function () {
            while (
              (this.strings[this.arrayPos].length > 12 && window.innerWidth < 480) ||
              (this.strings[this.arrayPos].length > 9 && window.innerWidth < 320)
            ) {
              if (this.arrayPos === this.strings.length - 1) {
                if (this.loop) {
                  this.arrayPos = 0;
                }
              } else {
                this.arrayPos++;
              }
            }
            if (window.innerWidth < 320) {
              return this.strings[this.arrayPos].replace('...', '');
            }
            return this.strings[this.arrayPos];
          }}
          strings={[
            'websites',
            'desktop applications',
            'jQuery plugins',
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
      </h1>
      {children}
    </div>
  );
}

export default Header;
