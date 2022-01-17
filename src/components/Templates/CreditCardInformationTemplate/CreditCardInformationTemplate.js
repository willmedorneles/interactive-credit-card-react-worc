import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationTemplate.scss';
import { CreditCardInformationFormOrganism, InteractiveCardOrganism } from '../../Organisms';

const CreditCardInformationTemplate = (props) => {
  return (
    <div className="CreditCardInformationTemplate" data-testid="CreditCardInformationTemplate">
      <div className='template-content'>
        <InteractiveCardOrganism
          {...props.creditCardInformation}
          showBack = {props.showBackCard}
        ></InteractiveCardOrganism>
        <CreditCardInformationFormOrganism
          {...props.fields}
          setShowBackCard = {props.setShowBackCard}
        ></CreditCardInformationFormOrganism>
      </div>
    </div>

  );
}

CreditCardInformationTemplate.propTypes = {};

CreditCardInformationTemplate.defaultProps = {};

export default CreditCardInformationTemplate;
