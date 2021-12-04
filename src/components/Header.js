import Typer from './Typer.js';
import PropTypes from 'prop-types';

function Header({ title, intro, children = null }) {
  return (
    <div className='min-h-full' style={{ padding: 'inherit' }}>
      <h1 className='font-semibold text-xl font-mono text-purple-700'>Hey there 😃! {intro}</h1>
      <h1 className='font-bold text-6xl text-gray-200 mt-5'>{title}</h1>
      <h1 className='font-semibold text-2xl font-mono text-purple-700 mt-5'>
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
            'libraries',
            'parsers',
            'linters',
            'eslint plugins',
            'shell scripts',
            'editor plugins',
            'react hooks',
            'react components',
            'github actions',
            'userscripts'
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
  children: PropTypes.node
};

export default Header;
