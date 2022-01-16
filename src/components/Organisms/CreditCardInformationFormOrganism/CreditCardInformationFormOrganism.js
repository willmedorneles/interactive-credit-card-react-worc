import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationFormOrganism.scss';
import { InputGroupMolecule } from '../../Molecules';

const CreditCardInformationFormOrganism = ({creditCardNumber, creditCardHolder, creditCardExpirationDate, creditCardCvv }) => (
  <div className="CreditCardInformationFormOrganism" data-testid="CreditCardInformationFormOrganism">
    <InputGroupMolecule input={creditCardNumber}></InputGroupMolecule>
    <InputGroupMolecule input={creditCardHolder}></InputGroupMolecule>
    <InputGroupMolecule input={creditCardCvv}></InputGroupMolecule>
  </div>
);

CreditCardInformationFormOrganism.propTypes = {};

CreditCardInformationFormOrganism.defaultProps = {};

export default CreditCardInformationFormOrganism;