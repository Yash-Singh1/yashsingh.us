import Code from './Code';
import HeadingFactory from './HeadingFactory';
import Paragraph from './Paragraph';

export const components = {
  h1: HeadingFactory(1),
  h2: HeadingFactory(2),
  h3: HeadingFactory(3),
  h4: HeadingFactory(4),
  h5: HeadingFactory(5),
  h6: HeadingFactory(6),
  code: Code,
  p: Paragraph,
};

export default components;
