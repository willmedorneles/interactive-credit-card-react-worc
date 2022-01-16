import React from 'react';
import PropTypes from 'prop-types';
import { CreditCardBackgroundAtom } from '../../Atoms';
import './InteractiveCardOrganism.scss';


const InteractiveCardOrganism = () => (
  <div className="InteractiveCardOrganism" data-testid="InteractiveCardOrganism">
    <CreditCardBackgroundAtom>
      InteractiveCardOrganism Component
    </CreditCardBackgroundAtom>
  </div>

);

InteractiveCardOrganism.propTypes = {};

InteractiveCardOrganism.defaultProps = {};

export default InteractiveCardOrganism;
