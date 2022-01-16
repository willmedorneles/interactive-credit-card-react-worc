import React, { lazy, Suspense } from 'react';

const LazyCreditCardInformationPage = lazy(() => import('./CreditCardInformationPage'));

const CreditCardInformationPage = props => (
  <Suspense fallback={null}>
    <LazyCreditCardInformationPage {...props} />
  </Suspense>
);

export default CreditCardInformationPage;
