import dynamic from 'next/dynamic';
import type { FC } from 'react';
const TinaProvider = dynamic(() => import('./TinaProvider'), { ssr: false }) as FC;
import { TinaEditProvider } from 'tinacms/dist/edit-state';

const DynamicTina = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* @ts-ignore */}
      <TinaEditProvider editMode={<TinaProvider>{children}</TinaProvider>}>
        {children}
      </TinaEditProvider>
    </>
  );
};

export default DynamicTina;
