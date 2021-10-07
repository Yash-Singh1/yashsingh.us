const express = require('express');
const frontmatter = require('@github-docs/frontmatter');
const handlebars = require('handlebars');
const fs = require('fs');
const marked = require('marked');
var hljs = require('highlight.js');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const { frontMatterRe } = require('markdownlint/helpers/helpers');
const app = express();

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const renderer = {
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${escapedText}" class="section-heading"><a href="#${escapedText}">${text}</a></h${level}>`;
  },

  blockquote(text) {
    return `<blockquote class="blockquote">${text}</blockquote>`;
  },

  image(href, title, text) {
    return `<a href="#">
  <img class="img-fluid" src="${href}" alt="${text}"${title ? ` title="${title}"` : ''}>
</a>
${title ? `<span class="caption text-muted">${title}</span>` : ''}`;
  }
};

marked.use({ renderer });

marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlight(code, { language: lang }).value;
  }
});

function getFrontmatter(file) {
  return frontmatter(fs.readFileSync('content/' + file, 'utf8')).data;
}

app.get('/', (req, res) => {
  res.sendFile('profile.html', { root: 'profile' });
});

app.get('/blog/', (req, res) => {
  if (req.path === '/blog') {
    return res.redirect('/blog/?page=1');
  }
  if (!req.query.page) {
    return res.redirect('?page=1');
  }
  const { page } = req.query;
  const template = handlebars.compile(fs.readFileSync('blog/index.handlebars', 'utf8'));
  res.header({ 'Content-Type': 'text/html' }).send(
    template(
      fs
        .readdirSync('content')
        .map((file) => ({ ...getFrontmatter(file), fileName: file, before: req.query.page > 1 }))
        .sort((postA, postB) => new Date(postB.date) - new Date(postA.date))
        .map((post, index, files) => ({ ...post, after: index !== files.length - 1 }))
        .slice(page * 5 - 5, page * 5)
    )
  );
});

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

app.get('/blog/index.html', (req, res) => {
  res.redirect('/blog/');
});

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

app.get('/profile/*', (req, res) => {
  res.sendFile(req.path.slice('/profile/'.length), { root: 'profile' });
});

app.get('/blog/post/*', (req, res) => {
  const template = handlebars.compile(fs.readFileSync('blog/post.handlebars', 'utf8'));
  const fileName = req.path.slice('/blog/post/'.length);
  const frontMatter = getFrontmatter(fileName);
  if (frontMatter.link) {
    return res.redirect(frontMatter.link);
  }
  try {
    res.header({ 'Content-Type': 'text/html' }).send(
      template({
        ...frontMatter,
        content: DOMPurify.sanitize(marked(fs.readFileSync('content/' + fileName, 'utf8').replace(frontMatterRe, '')))
      })
    );
  } catch {
    res.sendStatus(500);
  }
});

app.get(['/node_modules/*', '/styles/*'], (req, res) => {
  res.sendFile(req.path.slice(1), { root: '.' });
});

app.get('/blog/*', (req, res) => {
  if (req.path.startsWith('/blog/img/') && fs.existsSync('img/' + req.path.slice('/blog/img/'.length))) {
    res.sendFile(req.path.slice('/blog/img/'.length), { root: 'img' });
  } else if (fs.existsSync(req.path.slice(1))) {
    res.sendFile(req.path.slice(1), { root: '.' });
  }
});

const port = process.env.PORT || 5678;
app.listen(port, () => {
  console.log('Listening on :' + port);
});
