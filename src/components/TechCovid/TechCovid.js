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
          if (matchingNode.classList.contains('dont-hide')) return;
          matchingNode.classList.add('inside');
          matchingNode.classList.remove('hidden');
        };

        iconNode.onmouseleave = () => {
          matchingNode.classList.remove('inside');
          if (matchingNode.classList.contains('dont-hide')) return;
          matchingNode.classList.add('hidden');
        };

        iconNode.onclick = () => {
          if (matchingNode.classList.contains('hidden') || matchingNode.classList.contains('inside')) {
            matchingNode.classList.remove('hidden');
            matchingNode.classList.remove('inside');
            matchingNode.classList.add('dont-hide');
          } else if (!matchingNode.classList.contains('inside')) {
            matchingNode.classList.add('hidden');
            matchingNode.classList.remove('dont-hide');
          }
        };
      });
    }
  }, [svg]);

  return (
    <>
      <div ref={svg}>
        <Infographic className='infographic-svg' />
      </div>

      <article className='markdown-body'>
        <Info components={{ code: Code, h1: HeadingFactory(1), h2: HeadingFactory(2), h3: HeadingFactory(3) }} />{' '}
      </article>
    </>
  );
}

export default TechCovid;
