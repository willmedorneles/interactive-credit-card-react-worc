import React, { lazy, Suspense } from 'react';

const LazyInteractiveCardOrganism = lazy(() => import('./InteractiveCardOrganism'));

const InteractiveCardOrganism = props => (
  <Suspense fallback={null}>
    <LazyInteractiveCardOrganism {...props} />
  </Suspense>
);

export default InteractiveCardOrganism;
