import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import stripExtension from '../../../../helpers/stripExtension';
import plugins from '../../../../components/Post/plugins';
import { serialize } from 'next-mdx-remote/serialize';
import PostContent from './post';

function getRootDir() {
  let dir = '../../../../';
  while (!fs.existsSync(path.join(__dirname, dir, 'node_modules'))) {
    dir += '../';
  }
  return path.join(__dirname, dir);
}

function getPostData(id: string) {
  return matter(fs.readFileSync(path.join(getRootDir(), `content/posts/${id}.mdx`), 'utf8'));
}

export async function generateStaticParams() {
  return fs
    .readdirSync(path.join(getRootDir(), 'content/posts/'))
    .map((contentFilename) => ({ post: stripExtension(contentFilename) }));
}

interface PostProps {
  params: {
    post: string;
  };
}

export async function generateMetadata({ params }: PostProps) {
  return {
    title: `${getPostData(params.post).data.title} | Yash Singh's Blog - yashsingh.us`,
  };
}

export default async function Post({ params }: PostProps) {
  const { content, data } = getPostData(params.post);
  const mdxSource = await serialize(content, {
    mdxOptions: plugins,
  });

  return <PostContent content={mdxSource} data={data} />;
}
