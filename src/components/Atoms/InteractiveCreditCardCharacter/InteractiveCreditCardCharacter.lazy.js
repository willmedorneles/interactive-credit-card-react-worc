import React, { lazy, Suspense } from 'react';

const LazyInteractiveCreditCardCharacter = lazy(() => import('./InteractiveCreditCardCharacter'));

const InteractiveCreditCardCharacter = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCreditCardCharacter {...props} />
  </Suspense>
);

export default InteractiveCreditCardCharacter;
