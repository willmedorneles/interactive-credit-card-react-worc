import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardHolder.scss';
import { splitString } from '../../../core/helpers';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

const InteractiveCreditCardHolder = ({value, label}) => {

  const[characters, setCharacters] = useState(splitString(value));
  
  useEffect(()=>{
    if(value === ''){
      setCharacters(splitString('FULL NAME'));
    } else{
      setCharacters(splitString(value));
    }
  },[value]);

  return (
    <div className="InteractiveCreditCardHolder" data-testid="InteractiveCreditCardHolder">
      <LabelAtom frontLabel={true}>{label}</LabelAtom>
      <TransitionGroup
          className="slide-fade-up holder-name"
          component="div"
      >
        {
          characters.map((characterValue, index) => {
            return (
              <CSSTransition
              classNames="slide-fade-right"
              timeout={250}
              key={index}
              >
                <InteractiveCreditCardCharacter key={index}>{characterValue}</InteractiveCreditCardCharacter>
              </CSSTransition>
            );
          })
        }
      </TransitionGroup>
    </div>
  );
}

InteractiveCreditCardHolder.propTypes = {};

InteractiveCreditCardHolder.defaultProps = {};

export default InteractiveCreditCardHolder;
