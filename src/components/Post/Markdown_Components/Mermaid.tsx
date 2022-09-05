import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

function MermaidComponent(props: any) {
  return (
    <div className='bg-black/30 p-1 xs:p-3 flex justify-center sm:inline-block sm:w-max'>
      {props.manual ? (
        props.children
      ) : (
        <Mermaid
          {...props}
          config={{
            theme: {
              dark: 'dark',
            },
          }}
        />
      )}
    </div>
  );
}

export default MermaidComponent;
