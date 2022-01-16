import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardNumber.scss';
import { splitString } from '../../../core/helpers';
import { InteractiveCreditCardCharacter } from '../../Atoms';
import LabelAtom from '../../Atoms/LabelAtom/LabelAtom';

const InteractiveCreditCardNumber = ({value, label}) => {
  
  const[characters, setCharacters] = useState(splitString(value));
  
  useEffect(()=>{
    if(value === ''){
      setCharacters(splitString('#### **** **** ####'));
    } else{
      setCharacters(splitString(value));
    }
  },[value]);

  return (
    <div className="InteractiveCreditCardNumber" data-testid="InteractiveCreditCardNumber">
      <LabelAtom>{label}</LabelAtom>
      {
        characters.map((characterValue, index) => {
          return <InteractiveCreditCardCharacter key={index}>{characterValue}</InteractiveCreditCardCharacter>
        })
      }
    </div>
  );
}

InteractiveCreditCardNumber.propTypes = {};

InteractiveCreditCardNumber.defaultProps = {};

export default InteractiveCreditCardNumber;
