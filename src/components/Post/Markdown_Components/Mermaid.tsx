import { Mermaid, type MermaidProps } from 'mdx-mermaid/lib/Mermaid';
import Image from 'next/image';

function MermaidComponent(
  props:
    | {
        manual: true;
        alt: string;
        diagram: string;
      }
    | ({
        manual?: false;
      } & MermaidProps)
) {
  return (
    <div className='bg-black/30 p-1 xs:p-3 flex justify-center sm:inline-block sm:w-max relative'>
      {props.manual ? (
        <Image
          alt={props.alt}
          src={`https://mermaid.ink/svg/${props.diagram}`}
          // These numbers are just for prevent layout shifts, however we can't predetermine them
          width={100}
          height={100}
          className='w-full max-w-full'
        />
      ) : (
        <Mermaid
          {...props}
          config={{
            theme: {
              dark: 'dark',
              light: 'default',
            },
          }}
        />
      )}
    </div>
  );
}

export default MermaidComponent;
