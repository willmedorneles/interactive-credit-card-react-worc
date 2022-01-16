import React, { lazy, Suspense } from 'react';

const LazySelectAtom = lazy(() => import('./SelectAtom'));

const SelectAtom = props => (
  <Suspense fallback={null}>
    <LazySelectAtom {...props} />
  </Suspense>
);

export default SelectAtom;
