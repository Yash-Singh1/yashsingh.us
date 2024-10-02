import matter from 'gray-matter';
import * as fs from 'node:fs';
import path from 'node:path';
import stripExtension from '../helpers/stripExtension';
import { Post } from '../types/PostList';

function rssDateFormat(date: Date) {
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
    'Dec',
  ];
  return `${days[date.getDay()]}, ${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ${date.toTimeString().split(' ')[0]} ${
    date.toTimeString().split('GMT')[1].split(' ')[0]
  }`;
}

let dir = '../../';

while (!fs.existsSync(path.join(__dirname, dir, 'package.json'))) {
  dir += '../';
}

let posts = fs
  .readdirSync(path.join(__dirname, dir, 'content/posts'))
  .map((contentFile) => {
    let contents = fs.readFileSync(path.join(__dirname, dir, 'content/posts', contentFile), 'utf8');
    return {
      ...matter(contents).data,
      filename: stripExtension(contentFile),
    } as Post;
  })
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  .filter((post) => !post.draft);

const feed = `<rss version="2.0">
<channel>
  <title>Yash Singh's Blog</title>
  <description>Blog articles on topics related to programming</description>
  <link>https://www.yashsingh.us/blog</link>
  <lastBuildDate>${rssDateFormat(new Date())}</lastBuildDate>
  <ttl>600</ttl>
  <language>en-us</language>${posts
    .map((post) => {
      return `
  <item>
    <title>${post.title}</title>
    <link>${
      post.link || `https://www.yashsingh.us/blog/post/${stripExtension(post.filename)}`
    }</link>
    <description>${post.subtitle}</description>
    <pubDate>${rssDateFormat(new Date(post.date))}</pubDate>
  </item>`;
    })
    .join('')}
</channel>
</rss>
`;

fs.writeFileSync(path.join(__dirname, dir, 'public/feed.xml'), feed);
