import React, { lazy, Suspense } from 'react';

const LazyLabelAtom = lazy(() => import('./LabelAtom'));

const LabelAtom = props => (
  <Suspense fallback={null}>
    <LazyLabelAtom {...props} />
  </Suspense>
);

export default LabelAtom;
