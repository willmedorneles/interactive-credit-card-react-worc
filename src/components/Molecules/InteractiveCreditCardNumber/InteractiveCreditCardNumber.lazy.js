import React, { lazy, Suspense } from 'react';

const LazyInteractiveCreditCardNumber = lazy(() => import('./InteractiveCreditCardNumber'));

const InteractiveCreditCardNumber = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCreditCardNumber {...props} />
  </Suspense>
);

export default InteractiveCreditCardNumber;
