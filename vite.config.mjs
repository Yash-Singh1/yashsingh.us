import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import xdm from 'xdm/rollup.js';
import svgrPlugin from 'vite-plugin-svgr';
import fs from 'fs';
import yaml from 'js-yaml';

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
  <lastBuildDate>${rssDateFormat(new Date(new Date().setHours(0, 0, 0, 0)))}</lastBuildDate>
  <ttl>600</ttl>
  <language>en-us</language>${Object.entries(info)
    .sort(({ 1: { date: date1 } }, { 1: { date: date2 } }) => new Date(date2) - new Date(date1))
    .map(
      (item) => `
  <item>
    <title>${item[1].title}</title>
    <link>https://www.yashsingh.us/blog/post/${/([^/]*?)(\.[^/.]*?)?$/.exec(item[0])[1]}</link>
    <description>${item[1].subtitle}</description>${(item[1].keywords || [])
        .map(
          (keyword, keyIndex) => `${keyIndex === 0 ? '\n' : ''}    <category>${keyword}</category>`
        )
        .join('\n')}
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

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [
    {
      name: 'build-info-and-feed',
      transformIndexHtml(html) {
        buildMDXInfo();
        return html;
      }
    },
    xdm({ remarkPlugins: [remarkGfm, remarkFrontmatter], rehypePlugins: [rehypeHighlight] }),
    svgrPlugin()
  ]
};

export default config;
