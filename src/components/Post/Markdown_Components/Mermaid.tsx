import Image from 'next/image';

function MermaidComponent(props: { alt: string; diagram: string }) {
  return (
    <div className='bg-black/30 p-1 xs:p-3 flex justify-center sm:inline-block sm:w-max relative'>
      <Image
        alt={props.alt}
        src={`https://mermaid.ink/svg/${props.diagram}`}
        // These numbers are just for prevent layout shifts, however we can't predetermine them
        width={100}
        height={100}
        className='w-full max-w-full'
      />
    </div>
  );
}

export default MermaidComponent;
