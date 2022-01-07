const esbuild = require('esbuild');
const { default: postCssPlugin } = require('esbuild-plugin-postcss2');
const { default: ImportGlobPlugin } = require('esbuild-plugin-import-glob');
const liveServer = require('live-server');
const svgrPlugin = require('esbuild-plugin-svgr');
const fs = require('fs');
const yaml = require('js-yaml');

const dev = process.argv[2] === 'dev';

import('xdm/esbuild.js').then(({ default: xdm }) => {
  const filenames = [];
  const info = {};
  fs.readdirSync('./content')
    .filter((obj) => obj !== 'info')
    .forEach((mdxFile) => {
      filenames.push(mdxFile);
      info[mdxFile] = yaml.loadAll(
        fs.readFileSync('./content/' + mdxFile, 'utf-8').split('\n---\n')[0] + '\n---\n'
      )[0];
    });
  try {
    fs.mkdirSync('./src/data');
  } catch {}
  fs.writeFileSync('./src/data/info.json', JSON.stringify(info));
  fs.writeFileSync('./src/data/filenames.json', JSON.stringify(filenames));
  fs.writeFileSync(
    './src/data/fileImportMap.js',
    `export default {
${filenames
  .map(
    (filename) =>
      `  '${filename.slice(0, -4)}': () => import('../../content/${filename.slice(0, -4)}.mdx')`
  )
  .join(',\n')}
};
`
  );
  import('remark-gfm').then(({ default: remarkGfm }) => {
    import('remark-frontmatter').then(({ default: remarkFrontmatter }) => {
      esbuild
        .build({
          entryPoints: ['src/index.js'],
          bundle: true,
          sourcemap: dev ? 'inline' : false,
          outdir: 'public/',
          splitting: true,
          format: 'esm',
          plugins: [
            ImportGlobPlugin(),
            postCssPlugin(require('./postcss.config.js')),
            xdm({ remarkPlugins: [remarkGfm, remarkFrontmatter] }),
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
});
