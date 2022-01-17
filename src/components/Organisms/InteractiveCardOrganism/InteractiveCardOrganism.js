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
import classNames from 'classnames';

const InteractiveCardOrganism = ({
  creditCardType,
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDate,
  creditCardCvv,
  showBack = false,
}) => {
  const creditCardTypePath = `/img/${creditCardType}.png`;

  const cssClassesCard = classNames({
    'card-item': true,
    '-active': showBack
  });

  return (
    <div
      className="InteractiveCardOrganism"
      data-testid="InteractiveCardOrganism"
    >
      <div className={cssClassesCard}>
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
            <CreditCardBackgroundAtom/>
            <div className="card-magnetic-stripe"></div>
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
