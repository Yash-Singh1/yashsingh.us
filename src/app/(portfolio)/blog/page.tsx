import PostList, { Post } from '../../../types/PostList';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import stripExtension from '../../../helpers/stripExtension';
import BlogContent from './blog';

export const metadata = {
  title: "Saiansh (Yash) Singh's Blog",
  description: "Yash Singh's Blog - yashsingh.us",
};

export default function Blog() {
  let data: PostList;
  let dir = '../../../';
  while (!fs.existsSync(path.join(__dirname, dir, 'node_modules'))) {
    dir += '../';
  }
  data = fs.readdirSync(path.join(__dirname, dir, 'content/posts')).map((contentFile) => {
    let contents = fs.readFileSync(path.join(__dirname, dir, 'content/posts', contentFile), 'utf8');
    return {
      ...matter(contents).data,
      filename: stripExtension(contentFile),
    } as Post;
  });

  data = data!.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return <BlogContent data={data} />;
}
