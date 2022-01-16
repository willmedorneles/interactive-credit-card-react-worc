import React, { lazy, Suspense } from 'react';

const LazyInputAtom = lazy(() => import('./InputAtom'));

const InputAtom = props => (
  <Suspense fallback={null}>
    <LazyInputAtom {...props} />
  </Suspense>
);

export default InputAtom;
