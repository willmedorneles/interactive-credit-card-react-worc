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
  formSubmit = () => {},
  setShowBackCard
}) => {

  return (
    <div
      className="CreditCardInformationFormOrganism"
      data-testid="CreditCardInformationFormOrganism"
    >
    <CardAtom>
      <div className="cardNumberWrapper">
        <InputGroupMolecule input={creditCardNumber}></InputGroupMolecule>
      </div>
      <div className="cardHolderWrapper">
        <InputGroupMolecule input={creditCardHolder}></InputGroupMolecule>
      </div>
      <div className="cardExpirationWrapper">
        <SelectGroupMolecule
          label='Expiration Date'
          creditCardExpirationDateMonth={creditCardExpirationDateMonth}
          creditCardExpirationDateYear={creditCardExpirationDateYear}
        ></SelectGroupMolecule>
      </div>
      <div className="cardCvvWrapper">
        <InputGroupMolecule onFocus={() => {setShowBackCard(true)}} onBlur={() => {setShowBackCard(false)}} input={creditCardCvv}></InputGroupMolecule>
      </div>
      <ButtonAtom onClick={formSubmit}>Submit</ButtonAtom>
    </CardAtom>
      
    </div>
  );
}

CreditCardInformationFormOrganism.propTypes = {};

CreditCardInformationFormOrganism.defaultProps = {};

export default CreditCardInformationFormOrganism;
