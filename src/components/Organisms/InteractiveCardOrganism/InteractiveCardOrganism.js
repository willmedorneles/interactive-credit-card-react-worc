import React from "react";
import PropTypes from "prop-types";
import { CreditCardBackgroundAtom, ImageAtom } from "../../Atoms";
import "./InteractiveCardOrganism.scss";
import {
  InteractiveCreditCardNumber,
  InteractiveCreditCardHolder,
  InteractiveCreditCardExpiration,
} from "../../Molecules";

const InteractiveCardOrganism = ({
  creditCardType,
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDate
}) => {
  const creditCardTypePath = `/img/${creditCardType}.png`;
  return (
    <div
      className="InteractiveCardOrganism"
      data-testid="InteractiveCardOrganism"
    >
      <CreditCardBackgroundAtom>
        <div className="InteractiveCardContent">
          <ImageAtom src="/img/chip.png" />
          <ImageAtom src={creditCardTypePath} />
          <InteractiveCreditCardNumber {...creditCardNumber} />
          <InteractiveCreditCardHolder {...creditCardHolder} />
          <InteractiveCreditCardExpiration {...creditCardExpirationDate}/>
        </div>
      </CreditCardBackgroundAtom>
    </div>
  );
};

InteractiveCardOrganism.propTypes = {};

InteractiveCardOrganism.defaultProps = {};

export default InteractiveCardOrganism;
