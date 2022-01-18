import React, { useEffect, useState, setStyle } from "react";
import PropTypes from "prop-types";
import { CreditCardBackgroundAtom, ImageAtom } from "../../Atoms";
import "./InteractiveCardOrganism.scss";
import { getRandomInt } from "../../../core/helpers/getRandomInt";
import {
  InteractiveCreditCardNumber,
  InteractiveCreditCardHolder,
  InteractiveCreditCardExpiration,
  InteractiveCreditCardCvv,
} from "../../Molecules";

import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

import classNames from "classnames";


const InteractiveCardOrganism = ({
  creditCardType,
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDate,
  creditCardCvv,
  showBack = false,
  currentFocusedElement,
  cardElementRef,
}) => {
  const creditCardTypePath = `/img/${creditCardType}.png`;

  const cssClassesCard = classNames({
    "card-item": true,
    "-active": showBack,
  });

  const [bgPath, setBgPath] = useState("/img/1.png");
  const [style, setStyle] = useState(null);

  const outlineElementStyle = (element) => {
    return element
      ? {
          width: `${element.offsetWidth}px`,
          height: `${element.offsetHeight}px`,
          transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`,
        }
      : null;
  };

  useEffect(() => {
    if (currentFocusedElement) {
      const style = outlineElementStyle(currentFocusedElement.current);
      setStyle(style);
    }
  }, [currentFocusedElement]);

  useEffect(() => {
    const backgroundNumber = getRandomInt(1, 25);
    setBgPath(`/img/${backgroundNumber}.jpeg`);
  }, []);

  return (
    <div
      className="InteractiveCardOrganism"
      data-testid="InteractiveCardOrganism"
    >
      <div className={cssClassesCard}>
        <div
          className={`card-item__focus ${
            currentFocusedElement ? `-active` : ``
          }`}
          style={style}
        />
        <div className="card-item__side -front">
          <div className="InteractiveCardContent">
            <CreditCardBackgroundAtom bgPath={bgPath} />
            <div className="card-internal-content">
              <ImageAtom classes={{ chip: true }} src="/img/chip.png" />
              <TransitionGroup
                className="slide-fade-up card-type-wrapper"
                component="div"
              >
                <CSSTransition
                  classNames="slide-fade-up"
                  timeout={250}
                >
                  <ImageAtom
                    classes={{ "card-type": true }}
                    src={creditCardTypePath}
                  />
                </CSSTransition>
              </TransitionGroup>
              <InteractiveCreditCardNumber
                elementRef={cardElementRef.number}
                {...creditCardNumber}
              />
              <InteractiveCreditCardHolder
                elementRef={cardElementRef.holder}
                {...creditCardHolder}
              />
              <InteractiveCreditCardExpiration
                elementRef={cardElementRef.expiration}
                {...creditCardExpirationDate}
              />
            </div>
          </div>
        </div>
        <div className="card-item__side -back">
          <div className="InteractiveCardContent">
            <CreditCardBackgroundAtom bgPath={bgPath} />
            <div className="card-magnetic-stripe"></div>
            <InteractiveCreditCardCvv {...creditCardCvv} />
            <ImageAtom
              classes={{ "card-type": true }}
              src={creditCardTypePath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

InteractiveCardOrganism.propTypes = {};

InteractiveCardOrganism.defaultProps = {};

export default InteractiveCardOrganism;
