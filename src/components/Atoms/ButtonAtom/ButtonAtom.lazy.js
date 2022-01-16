import React, { lazy, Suspense } from 'react';

const LazyButtonAtom = lazy(() => import('./ButtonAtom'));

const ButtonAtom = props => (
  <Suspense fallback={null}>
    <LazyButtonAtom {...props} />
  </Suspense>
);

export default ButtonAtom;
