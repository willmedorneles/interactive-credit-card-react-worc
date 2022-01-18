import React from "react";
import PropTypes from "prop-types";
import "./CreditCardInformationFormOrganism.scss";
import { InputGroupMolecule, SelectGroupMolecule } from "../../Molecules";
import { CardAtom } from '../../Atoms';

const CreditCardInformationFormOrganism = ({
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDateMonth,
  creditCardExpirationDateYear,
  creditCardCvv,
  cardElementRef,
  setCurrentFocusedElement,
  formSubmit = () => {},
  enableButton,
  setShowBackCard
}) => {

  return (
    <div
      className="CreditCardInformationFormOrganism"
      data-testid="CreditCardInformationFormOrganism"
    >
    <CardAtom>
      <div className="cardNumberWrapper">
        <InputGroupMolecule elementRef={cardElementRef.number} setCurrentFocusedElement={setCurrentFocusedElement} input={creditCardNumber}></InputGroupMolecule>
      </div>
      <div className="cardHolderWrapper">
        <InputGroupMolecule elementRef={cardElementRef.holder} setCurrentFocusedElement={setCurrentFocusedElement} input={creditCardHolder}></InputGroupMolecule>
      </div>
      <div className="cardExpirationWrapper">
        <SelectGroupMolecule
          elementRef={cardElementRef.expiration}
          setCurrentFocusedElement={setCurrentFocusedElement}
          label='Expiration Date'
          creditCardExpirationDateMonth={creditCardExpirationDateMonth}
          creditCardExpirationDateYear={creditCardExpirationDateYear}
        ></SelectGroupMolecule>
      </div>
      <div className="cardCvvWrapper">
        <InputGroupMolecule onFocus={() => {setShowBackCard(true)}} onFocusOut={() => {setShowBackCard(false)}} input={creditCardCvv}></InputGroupMolecule>
      </div>
      <button disabled={!enableButton} onClick={formSubmit}>Submit</button>
    </CardAtom>
      
    </div>
  );
}

CreditCardInformationFormOrganism.propTypes = {};

CreditCardInformationFormOrganism.defaultProps = {};

export default CreditCardInformationFormOrganism;
