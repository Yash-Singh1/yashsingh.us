import { Suspense, useEffect } from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';

/**
 * Wraps the component in a <Suspense> with the loader fallback
 * @param {{ children: import('react').ReactChildren, className?: string }} props The component(s) to wrap
 */
function LoadingWrapper({ children, className }) {
  if (className) {
    useEffect(() => {
      document.documentElement.classList.add(className);

      return () => document.documentElement.classList.remove(className);
    }, []);
  }

  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

LoadingWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default LoadingWrapper;
