import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardHolder.scss';
import { splitString } from '../../../core/helpers';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';

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
      <LabelAtom>{label}</LabelAtom>
      {
        characters.map((characterValue, index) => {
          return <InteractiveCreditCardCharacter key={index}>{characterValue}</InteractiveCreditCardCharacter>
        })
      }
    </div>
  );
}

InteractiveCreditCardHolder.propTypes = {};

InteractiveCreditCardHolder.defaultProps = {};

export default InteractiveCreditCardHolder;
