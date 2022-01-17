import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardCvv.scss';
import { splitString } from '../../../core/helpers';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';
import { interactiveCreditCardCvvMask } from '../../../core/helpers/masks/InteractiveCreditCardCvvMask';
const InteractiveCreditCardCvv = ({value, label}) => {
  const[characters, setCharacters] = useState(splitString(value));

  useEffect(()=>{
    setCharacters(splitString(interactiveCreditCardCvvMask(value)));
  },[value]);

  return (
    <div className="InteractiveCreditCardCvv" data-testid="InteractiveCreditCardNumber">
      <LabelAtom>{label}</LabelAtom>
      <div className='cvv-stripe'>
        {
          characters.map((characterValue, index) => {
            return <InteractiveCreditCardCharacter key={index}>{characterValue}</InteractiveCreditCardCharacter>
          })
        }
      </div>
    </div>
  );
}

InteractiveCreditCardCvv.propTypes = {};

InteractiveCreditCardCvv.defaultProps = {};

export default InteractiveCreditCardCvv;
