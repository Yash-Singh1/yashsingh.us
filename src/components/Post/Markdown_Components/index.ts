import Code from './Code';
import HeadingFactory from './HeadingFactory';
import Paragraph from './Paragraph';

export const components = {
  h1: HeadingFactory(1),
  h2: HeadingFactory(2),
  h3: HeadingFactory(3),
  code: Code,
  p: Paragraph,
};

export default components;
