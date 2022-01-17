import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardNumber.scss';
import { splitString } from '../../../core/helpers';
import { InteractiveCreditCardCharacter } from '../../Atoms';
import LabelAtom from '../../Atoms/LabelAtom/LabelAtom';
import { interactiveCreditCardMask } from '../../../core/helpers/masks/InteractiveCreditCardMask';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

const InteractiveCreditCardNumber = ({value, label, elementRef}) => {
  
  const[characters, setCharacters] = useState(splitString(value));

  useEffect(()=>{
    if(value === ''){
      setCharacters(splitString('#### **** **** ####'));
    } else{
      setCharacters(splitString(interactiveCreditCardMask(value)));
    }
  },[value]);

  return (
    <div className="InteractiveCreditCardNumber" data-testid="InteractiveCreditCardNumber" ref={elementRef} name="number">
      <TransitionGroup
          className="slide-fade-up number-wrapper"
          component="div"
      >
        {
          characters.map((characterValue, index) => {
            return (
              <CSSTransition
              classNames="slide-fade-up"
              timeout={250}
              key={index}
              >
                <InteractiveCreditCardCharacter >{characterValue}</InteractiveCreditCardCharacter>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    </div>
  );
}

InteractiveCreditCardNumber.propTypes = {};

InteractiveCreditCardNumber.defaultProps = {};

export default InteractiveCreditCardNumber;
