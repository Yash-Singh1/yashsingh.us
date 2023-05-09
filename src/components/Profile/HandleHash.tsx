'use client';

import { useEffect } from 'react';

function HandleHash() {
  useEffect(() => {
    function handleHashChange(event: HashChangeEvent) {
      try {
        document
          .querySelector(`#${new URL(event.newURL).hash.slice(1).toLowerCase()}`)
          ?.scrollIntoView({ behavior: 'smooth' });
      } catch {}
    }
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}

export default HandleHash;
