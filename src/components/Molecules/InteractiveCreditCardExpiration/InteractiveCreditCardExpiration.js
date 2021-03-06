import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardExpiration.scss';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';
import { getLastTwoCharacters } from '../../../core/helpers';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

const InteractiveCreditCardExpiration = ({creditCardExpirationDateMonth, creditCardExpirationDateYear, elementRef}) => {
  const[charactersMonth, setCharactersMonth] = useState(creditCardExpirationDateMonth.value);
  const[charactersYear, setCharactersYear] = useState(creditCardExpirationDateYear.value);

  
  useEffect(()=>{
    if(creditCardExpirationDateMonth.value === 'Month' || creditCardExpirationDateMonth.value === ''){
      setCharactersMonth('MM');
    } else{
      setCharactersMonth(creditCardExpirationDateMonth.value);
    }
  },[creditCardExpirationDateMonth.value]);

  useEffect(()=>{
    if(creditCardExpirationDateYear.value === 'Year' || creditCardExpirationDateYear.value === ''){
      setCharactersYear('YY');
    } else{
      setCharactersYear(getLastTwoCharacters(creditCardExpirationDateYear.value));
    }
  },[creditCardExpirationDateYear.value]);

  return (
    <div className="InteractiveCreditCardExpiration" data-testid="InteractiveCreditCardExpiration" name="expiration" ref={elementRef}>
      <LabelAtom frontLabel={true}>Expiration Date</LabelAtom>
      <div className="expiration-date">
        <TransitionGroup
            className="slide-fade-up number-wrapper"
            component="div"
        >
          <CSSTransition
          classNames="slide-fade-up"
          timeout={250}
          >
            <InteractiveCreditCardCharacter>{charactersMonth}</InteractiveCreditCardCharacter>
          </CSSTransition>
        </TransitionGroup>
        /
        <TransitionGroup
            className="slide-fade-up number-wrapper"
            component="div"
        >
          <CSSTransition
          classNames="slide-fade-up"
          timeout={250}
          >
            <InteractiveCreditCardCharacter>{charactersYear}</InteractiveCreditCardCharacter>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

InteractiveCreditCardExpiration.propTypes = {};

InteractiveCreditCardExpiration.defaultProps = {};

export default InteractiveCreditCardExpiration;
