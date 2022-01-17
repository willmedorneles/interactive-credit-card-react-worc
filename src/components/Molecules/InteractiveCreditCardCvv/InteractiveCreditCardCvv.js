import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardCvv.scss';
import { splitString } from '../../../core/helpers';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';
import { interactiveCreditCardCvvMask } from '../../../core/helpers/masks/InteractiveCreditCardCvvMask';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

const InteractiveCreditCardCvv = ({value, label, elementRef}) => {
  const[characters, setCharacters] = useState(splitString(value));

  useEffect(()=>{
    setCharacters(splitString(interactiveCreditCardCvvMask(value)));
  },[value]);

  return (
    <div className="InteractiveCreditCardCvv" data-testid="InteractiveCreditCardNumber" ref={elementRef}>
      <LabelAtom>{label}</LabelAtom>
      <TransitionGroup
            className="zoom-in-out cvv-stripe"
            component="div"
        >
        {
          characters.map((characterValue, index) => {
            return (
              <CSSTransition
              classNames="zoom-in-out"
              timeout={250}
              key={index}
              >
                <InteractiveCreditCardCharacter >{characterValue}</InteractiveCreditCardCharacter>
              </CSSTransition>
            );
          })
        }
        </TransitionGroup>
    </div>
  );
}

InteractiveCreditCardCvv.propTypes = {};

InteractiveCreditCardCvv.defaultProps = {};

export default InteractiveCreditCardCvv;
