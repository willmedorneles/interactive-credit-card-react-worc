import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationTemplate.scss';
import { CreditCardInformationFormOrganism, InteractiveCardOrganism } from '../../Organisms';

const CreditCardInformationTemplate = (props) => {
  return (
    <div className="CreditCardInformationTemplate" data-testid="CreditCardInformationTemplate">
      <InteractiveCardOrganism
        {...props.creditCardInformation}
      ></InteractiveCardOrganism>
      <CreditCardInformationFormOrganism
        {...props.fields}
      ></CreditCardInformationFormOrganism>
    </div>
  );
}

CreditCardInformationTemplate.propTypes = {};

CreditCardInformationTemplate.defaultProps = {};

export default CreditCardInformationTemplate;
