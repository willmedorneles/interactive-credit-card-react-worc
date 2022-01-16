import React, { lazy, Suspense } from 'react';

const LazyInteractiveCreditCardHolder = lazy(() => import('./InteractiveCreditCardHolder'));

const InteractiveCreditCardHolder = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCreditCardHolder {...props} />
  </Suspense>
);

export default InteractiveCreditCardHolder;
