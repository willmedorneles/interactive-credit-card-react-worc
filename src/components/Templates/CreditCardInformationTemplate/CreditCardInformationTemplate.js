import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CreditCardInformationTemplate.scss';
import { CreditCardInformationFormOrganism, InteractiveCardOrganism } from '../../Organisms';

const CreditCardInformationTemplate = (props) => {
  const [currentFocusedElement, setCurrentFocusedElement] = useState(null);
  const referencesCard = {number: useRef(null), holder: useRef(null), expiration: useRef(null)}

  return (
    <div className="CreditCardInformationTemplate" data-testid="CreditCardInformationTemplate">
      <div className='template-content'>
        <InteractiveCardOrganism
          {...props.creditCardInformation}
          showBack = {props.showBackCard}
          currentFocusedElement={currentFocusedElement}
          cardElementRef={referencesCard}
        ></InteractiveCardOrganism>
        <CreditCardInformationFormOrganism
          {...props.fields}
          setShowBackCard = {props.setShowBackCard}
          setCurrentFocusedElement={setCurrentFocusedElement}
          cardElementRef={referencesCard}
        ></CreditCardInformationFormOrganism>
      </div>
    </div>

  );
}

CreditCardInformationTemplate.propTypes = {};

CreditCardInformationTemplate.defaultProps = {};

export default CreditCardInformationTemplate;
