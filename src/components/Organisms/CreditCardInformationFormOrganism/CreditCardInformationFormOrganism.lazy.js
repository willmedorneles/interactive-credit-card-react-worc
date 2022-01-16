import React, { lazy, Suspense } from 'react';

const LazyCreditCardInformationFormOrganism = lazy(() => import('./CreditCardInformationFormOrganism'));

const CreditCardInformationFormOrganism = props => (
  <Suspense fallback={null}>
    <LazyCreditCardInformationFormOrganism {...props} />
  </Suspense>
);

export default CreditCardInformationFormOrganism;
