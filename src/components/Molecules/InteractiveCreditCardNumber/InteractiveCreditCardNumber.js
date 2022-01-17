import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardNumber.scss';
import { splitString } from '../../../core/helpers';
import { InteractiveCreditCardCharacter } from '../../Atoms';
import LabelAtom from '../../Atoms/LabelAtom/LabelAtom';
import { interactiveCreditCardMask } from '../../../core/helpers/masks/InteractiveCreditCardMask';
const InteractiveCreditCardNumber = ({value, label}) => {
  
  const[characters, setCharacters] = useState(splitString(value));

  useEffect(()=>{
    if(value === ''){
      setCharacters(splitString('#### **** **** ####'));
    } else{
      setCharacters(splitString(interactiveCreditCardMask(value)));
    }
  },[value]);

  return (
    <div className="InteractiveCreditCardNumber" data-testid="InteractiveCreditCardNumber">
      <div class="number-wrapper">
        {
          characters.map((characterValue, index) => {
            return <InteractiveCreditCardCharacter key={index}>{characterValue}</InteractiveCreditCardCharacter>
          })
        }
      </div>
      
    </div>
  );
}

InteractiveCreditCardNumber.propTypes = {};

InteractiveCreditCardNumber.defaultProps = {};

export default InteractiveCreditCardNumber;
