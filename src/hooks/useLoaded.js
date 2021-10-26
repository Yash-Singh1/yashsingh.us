import { useState, useEffect } from 'react';

function useLoaded() {
  const [loaded, load] = useState(false);

  useEffect(() => {
    setTimeout(() => load(true), 1000);
  }, []);

  return loaded;
}

export default useLoaded;
