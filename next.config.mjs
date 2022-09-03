import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';
// import remarkFrontmatter from 'remark-frontmatter';
// import rehypePrettyCode from 'rehype-pretty-code';
// import rehypeKatex from 'rehype-katex';
// import remarkMath from 'remark-math';
import esbuild from 'esbuild';
import { mkdirSync } from 'node:fs';

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

async function config() {
  try {
    mkdirSync('node_modules/.custom');
  } catch {}

  await esbuild.build({
    entryPoints: ['./src/components/Post/plugins.ts'],
    outfile: 'node_modules/.custom/post-plugins.mjs',
    write: true,
    target: 'es2022',
  });

  const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: await import('./node_modules/.custom/post-plugins.mjs').default,
  });

  return withMDX(nextConfig);
}

export default config;
