import React, { lazy, Suspense } from 'react';

const LazyInteractiveCreditCardCvv = lazy(() => import('./InteractiveCreditCardCvv'));

const InteractiveCreditCardCvv = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCreditCardCvv {...props} />
  </Suspense>
);

export default InteractiveCreditCardCvv;
