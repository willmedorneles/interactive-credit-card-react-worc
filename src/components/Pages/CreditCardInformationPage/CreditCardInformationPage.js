import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationPage.scss';
import { useFormField } from '../../../core/hooks/useFormField';
import { initialState } from './InitialState';
import { CreditCardInformationTemplate } from '../../Templates';

const CreditCardInformationPage = () => {
  const creditCardNumber = useFormField(initialState.creditCardNumber);
  return (
    <CreditCardInformationTemplate
      fields={{creditCardNumber}}
    ></CreditCardInformationTemplate>
  );
}

CreditCardInformationPage.propTypes = {};

CreditCardInformationPage.defaultProps = {};

export default CreditCardInformationPage;
