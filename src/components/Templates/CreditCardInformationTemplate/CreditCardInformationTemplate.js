import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationTemplate.scss';
import { CreditCardInformationFormOrganism, InteractiveCardOrganism } from '../../Organisms';

const CreditCardInformationTemplate = (props) => (
  <div className="CreditCardInformationTemplate" data-testid="CreditCardInformationTemplate">
    <InteractiveCardOrganism></InteractiveCardOrganism>
    <CreditCardInformationFormOrganism
      {...props.fields}
    ></CreditCardInformationFormOrganism>
  </div>
);

CreditCardInformationTemplate.propTypes = {};

CreditCardInformationTemplate.defaultProps = {};

export default CreditCardInformationTemplate;
