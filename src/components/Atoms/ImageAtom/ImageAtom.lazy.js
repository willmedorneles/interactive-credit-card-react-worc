import React, { lazy, Suspense } from 'react';

const LazyImageAtom = lazy(() => import('./ImageAtom'));

const ImageAtom = props => (
  <Suspense fallback={null}>
    <LazyImageAtom {...props} />
  </Suspense>
);

export default ImageAtom;
