import React from "react";
import PropTypes from "prop-types";
import { CreditCardBackgroundAtom, ImageAtom } from "../../Atoms";
import "./InteractiveCardOrganism.scss";
import {
  InteractiveCreditCardNumber,
  InteractiveCreditCardHolder,
  InteractiveCreditCardExpiration,
  InteractiveCreditCardCvv,
} from "../../Molecules";

const InteractiveCardOrganism = ({
  creditCardType,
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDate,
  creditCardCvv
}) => {
  const creditCardTypePath = `/img/${creditCardType}.png`;
  return (
    <div
      className="InteractiveCardOrganism"
      data-testid="InteractiveCardOrganism"
    >
      <div className="card-item">
        <div className="card-item__side -front">
          <div className="InteractiveCardContent">
            <CreditCardBackgroundAtom/>
            <div className="card-internal-content">
              <ImageAtom classes={{'chip': true}} src="/img/chip.png" />
              <ImageAtom classes={{'card-type': true}} src={creditCardTypePath} />
              <InteractiveCreditCardNumber {...creditCardNumber} />
              <InteractiveCreditCardHolder {...creditCardHolder} />
              <InteractiveCreditCardExpiration {...creditCardExpirationDate}/>
            </div>
            
          </div>
        </div>
        <div className="card-item__side -back">
          <div className="InteractiveCardContent">
            <InteractiveCreditCardCvv {...creditCardCvv} />
            <ImageAtom classes={{'card-type': true}} src={creditCardTypePath} />
          </div>
        </div>
      </div>
    </div>
  );
};

InteractiveCardOrganism.propTypes = {};

InteractiveCardOrganism.defaultProps = {};

export default InteractiveCardOrganism;
