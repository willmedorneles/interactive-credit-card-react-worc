import React from 'react';
import PropTypes from 'prop-types';
import { CreditCardBackgroundAtom, ImageAtom } from '../../Atoms';
import './InteractiveCardOrganism.scss';
import { InteractiveCreditCardNumber } from '../../Molecules';


const InteractiveCardOrganism = ({creditCardType, creditCardNumber}) => {
  
  const creditCardTypePath = `/img/${creditCardType}.png`;
  console.log(creditCardNumber);
  return (
    <div className="InteractiveCardOrganism" data-testid="InteractiveCardOrganism">
      <CreditCardBackgroundAtom>
        <div className='InteractiveCardContent'>
          <ImageAtom src='/img/chip.png'/>
          <ImageAtom src={creditCardTypePath}/>
          <InteractiveCreditCardNumber {...creditCardNumber}/>
        </div>
      </CreditCardBackgroundAtom>
    </div>
  
  );
}

InteractiveCardOrganism.propTypes = {};

InteractiveCardOrganism.defaultProps = {};

export default InteractiveCardOrganism;
