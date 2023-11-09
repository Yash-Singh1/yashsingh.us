import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import stripExtension from '../../../../helpers/stripExtension';
import plugins from '../../../../components/Post/plugins';
import { serialize } from 'next-mdx-remote/serialize';
import PostContent from './post';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

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

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { data } = getPostData(params.post);

  return {
    title: `${data.title} | Yash Singh's Blog - yashsingh.us`,
    description: data.subtitle,
    authors: { name: 'Yash Singh' },
    openGraph: {
      images: data.image,
    },
  };
}

export default async function Post({ params }: PostProps) {
  const { content, data } = getPostData(params.post);

  if (data.link) {
    redirect(data.link);
  }

  const mdxSource = await serialize(content, {
    mdxOptions: plugins,
  });

  return <PostContent content={mdxSource} data={data} />;
}
