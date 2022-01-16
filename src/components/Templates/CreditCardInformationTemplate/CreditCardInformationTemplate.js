import React from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationTemplate.scss';
import { CreditCardInformationFormOrganism } from '../../Organisms';

const CreditCardInformationTemplate = (props) => (
  <div className="CreditCardInformationTemplate" data-testid="CreditCardInformationTemplate">
    <CreditCardInformationFormOrganism
      {...props.fields}
    ></CreditCardInformationFormOrganism>
  </div>
);

CreditCardInformationTemplate.propTypes = {};

CreditCardInformationTemplate.defaultProps = {};

export default CreditCardInformationTemplate;
