const esbuild = require('esbuild');
const { default: postCssPlugin } = require('esbuild-plugin-postcss2');
const { default: ImportGlobPlugin } = require('esbuild-plugin-import-glob');
const liveServer = require('live-server');

const dev = process.argv[2] === 'dev';

import('xdm/esbuild.js').then(({ default: xdm }) => {
  esbuild
    .build({
      entryPoints: ['src/index.js'],
      bundle: true,
      outfile: 'public/bundle.js',
      plugins: [ImportGlobPlugin(), postCssPlugin(require('./postcss.config.js')), xdm()],
      minify: true,
      loader: {
        '.js': 'jsx'
      },
      watch: dev,
      inject: ['./src/inject/react-shim.js'],
      logLevel: dev ? 'info' : 'error'
    })
    .catch((e) => console.error(e.message));

  if (dev) {
    liveServer.start({
      port: 5678,
      root: 'public',
      file: 'index.html',
      logLevel: dev ? 1 : 0
    });
  }
});
