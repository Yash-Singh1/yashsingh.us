import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import withSvgr from 'next-plugin-svgr';
import withPlugins from 'next-compose-plugins';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  rewrites: async function () {
    return [
      {
        source: '/blog',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.+)',
          },
        ],
        destination: '/blog/:page',
      },
      {
        source: '/blog',
        destination: '/blog/1',
      },
    ];
  },
};

export default withPlugins([withMDX, withSvgr], nextConfig);
