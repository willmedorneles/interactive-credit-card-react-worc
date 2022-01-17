import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardExpiration.scss';
import { LabelAtom, InteractiveCreditCardCharacter } from '../../Atoms';
import { getLastTwoCharacters } from '../../../core/helpers';

const InteractiveCreditCardExpiration = ({creditCardExpirationDateMonth, creditCardExpirationDateYear}) => {
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
    <div className="InteractiveCreditCardExpiration" data-testid="InteractiveCreditCardExpiration">
      <LabelAtom frontLabel={true}>Expiration Date</LabelAtom>
      <div className='expiration-date'>
        <InteractiveCreditCardCharacter>{charactersMonth}</InteractiveCreditCardCharacter>
        /
        <InteractiveCreditCardCharacter>{charactersYear}</InteractiveCreditCardCharacter>
      </div>

    </div>
  );
}

InteractiveCreditCardExpiration.propTypes = {};

InteractiveCreditCardExpiration.defaultProps = {};

export default InteractiveCreditCardExpiration;
