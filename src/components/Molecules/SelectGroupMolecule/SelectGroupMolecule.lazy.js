import React, { lazy, Suspense } from 'react';

const LazySelectGroupMolecule = lazy(() => import('./SelectGroupMolecule'));

const SelectGroupMolecule = props => (
  <Suspense fallback={null}>
    <LazySelectGroupMolecule {...props} />
  </Suspense>
);

export default SelectGroupMolecule;
