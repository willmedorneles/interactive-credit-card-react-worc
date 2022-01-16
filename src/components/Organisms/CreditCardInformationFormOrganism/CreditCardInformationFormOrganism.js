import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationFormOrganism.scss';
import { InputGroupMolecule } from '../../Molecules';

const CreditCardInformationFormOrganism = ({creditCardNumber }) => (
  <div className="CreditCardInformationFormOrganism" data-testid="CreditCardInformationFormOrganism">
    <InputGroupMolecule input={creditCardNumber}></InputGroupMolecule>
  </div>
);

CreditCardInformationFormOrganism.propTypes = {};

CreditCardInformationFormOrganism.defaultProps = {};

export default CreditCardInformationFormOrganism;
