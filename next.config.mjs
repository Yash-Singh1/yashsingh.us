import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    swcMinifyDebugOptions: {
      compress: {
        defaults: true,
        side_effects: false,
      },
    },
  },
  swcMinify: true,
  compiler: {
    styledComponents: false,
  },
};

export default withMDX(nextConfig);
