import { Suspense } from 'react';
import Loader from './Loader';

/**
 * Wraps the component in a <Suspense> with the loader fallback
 * @param {{ children: import('react').ReactChildren }} props The component(s) to wrap
 */
function LoadingWrapper({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

export default LoadingWrapper;
