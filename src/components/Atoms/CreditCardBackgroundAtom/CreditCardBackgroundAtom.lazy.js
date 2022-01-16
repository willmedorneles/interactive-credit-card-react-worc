import React, { lazy, Suspense } from 'react';

const LazyCreditCardBackgroundAtom = lazy(() => import('./CreditCardBackgroundAtom'));

const CreditCardBackgroundAtom = props => (
  <Suspense fallback={null}>
    <LazyCreditCardBackgroundAtom {...props} />
  </Suspense>
);

export default CreditCardBackgroundAtom;
