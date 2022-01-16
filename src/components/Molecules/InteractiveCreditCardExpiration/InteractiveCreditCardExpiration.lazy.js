import React, { lazy, Suspense } from 'react';

const LazyInteractiveCreditCardExpiration = lazy(() => import('./InteractiveCreditCardExpiration'));

const InteractiveCreditCardExpiration = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCreditCardExpiration {...props} />
  </Suspense>
);

export default InteractiveCreditCardExpiration;
