const esbuild = require('esbuild');
const { default: postCssPlugin } = require('esbuild-plugin-postcss2');
const { default: ImportGlobPlugin } = require('esbuild-plugin-import-glob');
const liveServer = require('live-server');
const svgrPlugin = require('esbuild-plugin-svgr');

const dev = process.argv[2] === 'dev';

import('xdm/esbuild.js').then(({ default: xdm }) => {
  import('remark-gfm').then(({ default: remarkGfm }) => {
    esbuild
      .build({
        entryPoints: ['src/index.js'],
        bundle: true,
        outdir: 'public/',
        splitting: true,
        format: 'esm',
        plugins: [
          ImportGlobPlugin(),
          postCssPlugin(require('./postcss.config.js')),
          xdm({ remarkPlugins: [remarkGfm] }),
          svgrPlugin()
        ],
        minify: true,
        loader: {
          '.js': 'jsx'
        },
        watch: dev,
        inject: ['./src/inject/react-shim.js'],
        logLevel: dev ? 'info' : 'error',
        minify: !dev
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
});
