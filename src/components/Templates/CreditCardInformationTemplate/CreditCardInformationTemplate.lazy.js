import React, { lazy, Suspense } from 'react';

const LazyCreditCardInformationTemplate = lazy(() => import('./CreditCardInformationTemplate'));

const CreditCardInformationTemplate = props => (
  <Suspense fallback={null}>
    <LazyCreditCardInformationTemplate {...props} />
  </Suspense>
);

export default CreditCardInformationTemplate;
