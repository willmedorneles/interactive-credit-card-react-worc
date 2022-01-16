import React, { lazy, Suspense } from 'react';

const LazyInputGroupMolecule = lazy(() => import('./InputGroupMolecule'));

const InputGroupMolecule = props => (
  <Suspense fallback={null}>
    <LazyInputGroupMolecule {...props} />
  </Suspense>
);

export default InputGroupMolecule;
