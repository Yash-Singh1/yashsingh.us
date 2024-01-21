import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import type { MDXRemote } from 'next-mdx-remote/rsc';

type PluginOptions = NonNullable<
  NonNullable<Parameters<typeof MDXRemote>[0]['options']>['mdxOptions']
>;

const plugins: PluginOptions = {
  remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMath],
  rehypePlugins: [
    [rehypePrettyCode, { theme: 'one-dark-pro' }] as NonNullable<
      PluginOptions['rehypePlugins']
    >[number],
    rehypeKatex as NonNullable<PluginOptions['rehypePlugins']>[number],
  ],
};

export default plugins;
