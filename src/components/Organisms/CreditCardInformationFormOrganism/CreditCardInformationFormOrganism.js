import React from "react";
import PropTypes from "prop-types";
import "./CreditCardInformationFormOrganism.scss";
import { InputGroupMolecule, SelectGroupMolecule } from "../../Molecules";
import { CardAtom, ButtonAtom } from '../../Atoms';

const CreditCardInformationFormOrganism = ({
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDateMonth,
  creditCardExpirationDateYear,
  creditCardCvv,
  formSubmit = () => {}
}) => (
  <div
    className="CreditCardInformationFormOrganism"
    data-testid="CreditCardInformationFormOrganism"
  >
  <CardAtom>
    <InputGroupMolecule input={creditCardNumber}></InputGroupMolecule>
    <InputGroupMolecule input={creditCardHolder}></InputGroupMolecule>
    <SelectGroupMolecule
      label='Expiration Date'
      creditCardExpirationDateMonth={creditCardExpirationDateMonth}
      creditCardExpirationDateYear={creditCardExpirationDateYear}
    ></SelectGroupMolecule>
    <InputGroupMolecule input={creditCardCvv}></InputGroupMolecule>
    <ButtonAtom onClick={formSubmit}>Submit</ButtonAtom>
  </CardAtom>
    
  </div>
);

CreditCardInformationFormOrganism.propTypes = {};

CreditCardInformationFormOrganism.defaultProps = {};

export default CreditCardInformationFormOrganism;
