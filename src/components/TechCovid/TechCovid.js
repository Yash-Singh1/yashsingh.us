import Infographic from './infographic.svg';
import { useEffect, useRef } from 'react';
import '../../styles/tech-infographic.css';
import '../../styles/post.css';
import Info from './Information.mdx';
import Code from '../Post/Markdown_Components/Code';
import HeadingFactory from '../Post/Markdown_Components/HeadingFactory';

function TechCovid() {
  /** @type {{current: HTMLDivElement | null}} */
  const svg = useRef(null);

  useEffect(() => {
    if (svg && svg.current) {
      svg.current.querySelectorAll(':not(#everything) > [for]').forEach((iconNode) => {
        const matchingNode = svg.current.querySelector(`#everything > [for="${iconNode.getAttribute('for')}"]`);
        matchingNode.classList.add('hidden');

        iconNode.onmouseover = () => {
          matchingNode.classList.remove('hidden');
        };

        iconNode.onmouseleave = () => {
          matchingNode.classList.add('hidden');
        };

        iconNode.onclick = () => {
          if (matchingNode.classList.contains('hidden')) {
            matchingNode.classList.remove('hidden');
          } else {
            matchingNode.classList.add('hidden');
          }
        };
      });
    }
  }, [svg]);

  useEffect(() => {
    document.documentElement.classList.add('infographic-tech-covid');

    return () => document.documentElement.classList.remove('infographic-tech-covid');
  }, []);

  return (
    <>
      <article className='markdown-body'>
        <Info components={{ code: Code, h1: HeadingFactory(1), h2: HeadingFactory(2), h3: HeadingFactory(3) }} />{' '}
      </article>

      <div ref={svg}>
        <Infographic className='infographic-svg' />
      </div>
    </>
  );
}

export default TechCovid;
