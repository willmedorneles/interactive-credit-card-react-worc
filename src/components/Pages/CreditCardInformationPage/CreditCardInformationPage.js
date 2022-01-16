import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationPage.scss';
import { useFormField } from '../../../core/hooks/useFormField';
import { initialState } from './InitialState';
import { CreditCardInformationTemplate } from '../../Templates';

const CreditCardInformationPage = () => {
  const creditCardNumber = useFormField(initialState.creditCardNumber);
  const creditCardHolder = useFormField(initialState.creditCardHolder);
  const creditCardExpirationDateMonth = useFormField(initialState.creditCardExpirationDateMonth);
  const creditCardExpirationDateYear = useFormField(initialState.creditCardExpirationDateYear);
  const creditCardCvv = useFormField(initialState.creditCardCvv);



  return (
    <section className='CreditCardPage'>
      <CreditCardInformationTemplate
        fields={{creditCardNumber, creditCardHolder, creditCardExpirationDateMonth, creditCardExpirationDateYear, creditCardCvv}}
      ></CreditCardInformationTemplate>
    </section>
  );
}

CreditCardInformationPage.propTypes = {};

CreditCardInformationPage.defaultProps = {};

export default CreditCardInformationPage;
