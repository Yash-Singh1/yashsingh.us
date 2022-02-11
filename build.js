const esbuild = require('esbuild');
const { default: postCssPlugin } = require('esbuild-plugin-postcss2');
const { default: ImportGlobPlugin } = require('esbuild-plugin-import-glob');
const liveServer = require('live-server');
const svgrPlugin = require('esbuild-plugin-svgr');
const fs = require('fs');
const yaml = require('js-yaml');

const dev = process.argv[2] === 'dev';

function rssDateFormat(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return `${days[date.getDay()]}, ${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ${date.toTimeString().split(' ')[0]} ${
    date.toTimeString().split('GMT')[1].split(' ')[0]
  }`;
}

import('xdm/esbuild.js').then(({ default: xdm }) => {
  function buildMDXInfo() {
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
    fs.writeFileSync(
      './public/feed.xml',
      `<rss version="2.0">
<channel>
  <title>Yash Singh's Blog</title>
  <description>Blog articles on topics related to programming</description>
  <link>https://www.yashsingh.us/blog</link>
  <lastBuildDate>${rssDateFormat(new Date())}</lastBuildDate>
  <language>en-us</language>${Object.entries(info)
    .sort(({ 1: { date: date1 } }, { 1: { date: date2 } }) => new Date(date2) - new Date(date1))
    .map(
      (item) => `
  <item>
    <title>${item[1].title}</title>
    <link>https://www.yashsingh.us/blog/post/${/([^/]*?)(\.[^/.]*?)?$/.exec(item[0])[1]}</link>
    <description>${item[1].subtitle}</description>
    <pubDate>${rssDateFormat(new Date(item[1].date))}</pubDate>
  </item>`
    )
    .join('')}
</channel>
</rss>
`
    );
  }
  buildMDXInfo();
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
          watch: dev ? { onRebuild: buildMDXInfo } : false,
          inject: ['./src/inject/react-shim.js'],
          logLevel: 'info',
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
