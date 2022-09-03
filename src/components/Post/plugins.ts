import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const plugins: {
  remarkPlugins: import('unified').PluggableList;
  rehypePlugins: import('unified').PluggableList;
} = {
  remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMath],
  rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }], rehypeKatex],
};

export default plugins;
