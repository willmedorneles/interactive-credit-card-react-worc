import React, { lazy, Suspense } from 'react';

const LazyCardAtom = lazy(() => import('./CardAtom'));

const CardAtom = props => (
  <Suspense fallback={null}>
    <LazyCardAtom {...props} />
  </Suspense>
);

export default CardAtom;
