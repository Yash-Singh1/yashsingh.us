import Typer from './Typer.jsx';
import PropTypes from 'prop-types';

function Header({ title, intro, children = null, large = false }) {
  return (
    <div className={`${large ? 'min-h-full' : ''} header`}>
      <h1 className='font-semibold sm:text-xl text-lg font-mono text-violet-700'>Hey there 😃! {intro}</h1>
      <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl text-gray-200 mt-5'>{title}</h1>
      <h1 className='font-semibold sm:text-2xl text-lg font-mono text-violet-700 mt-5'>
        Working on{' '}
        <Typer
          strings={[
            'websites',
            'desktop applications',
            'jQuery plugins',
            'games',
            'chrome extensions',
            'CLIs',
            'APIs',
            'JSON Schemas',
            'libraries',
            'parsers',
            'grammars',
            'discord servers',
            'chat bots',
            'algorithms',
            'linters',
            'solutions',
            'eslint plugins',
            'shell scripts',
            'tests',
            'editor plugins',
            'react hooks',
            'documentation',
            'react components',
            'github actions',
            'discord bots',
            'userscripts',
            'zsh plugins'
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

Header.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool
};

export default Header;
