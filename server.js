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
  if (!req.query.page) {
    return res.redirect('?page=1');
  }
  const { page } = req.query;
  const template = handlebars.compile(fs.readFileSync('template/index.handlebars', 'utf8'));
  res.header({ 'Content-Type': 'text/html' }).send(
    template(
      fs
        .readdirSync('content')
        .map((file) => ({ ...getFrontmatter(file), fileName: file }))
        .sort((postA, postB) => new Date(postB.date) - new Date(postA.date) )
        .slice(page * 5 - 5, page * 5 - 1)
    )
  );
});

app.get('/index.html', (req, res) => {
  res.redirect('/');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

app.get('/all-posts/', (req, res) => {
  res.send(fs.readdirSync('content'));
});

app.get('/older-posts.js', (req, res) => {
  res.sendFile('older-posts.js', { root: '.' });
});

app.get('/index.css', (req, res) => {
  res.sendFile('index.css', { root: '.' });
});

app.get('/post/*', (req, res) => {
  const template = handlebars.compile(fs.readFileSync('template/post.handlebars', 'utf8'));
  const fileName = req.path.slice('/post/'.length);
  try {
    res.header({ 'Content-Type': 'text/html' }).send(
      template({
        ...getFrontmatter(fileName),
        content: DOMPurify.sanitize(marked(fs.readFileSync('content/' + fileName, 'utf8').replace(frontMatterRe, '')))
      })
    );
  } catch {
    res.status(500);
  }
});

app.get('/node_modules/*', (req, res) => {
  res.sendFile(req.path.slice(1), { root: '.' });
});

app.get('/*', (req, res) => {
  try {
    res.sendFile('template/' + req.path.slice(1), { root: '.' });
  } catch {
    res.status(500);
  }
});

const port = process.env.PORT || 5678;
app.listen(port);
