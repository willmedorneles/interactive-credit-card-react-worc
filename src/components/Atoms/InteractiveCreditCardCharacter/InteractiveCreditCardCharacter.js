import React from 'react';
import PropTypes from 'prop-types';
import './InteractiveCreditCardCharacter.scss';

const InteractiveCreditCardCharacter = ({children}) => {
  return (
    <div className="InteractiveCreditCardCharacter" data-testid="InteractiveCreditCardCharacter">
      <p>{children}</p>
    </div>
  );
}

InteractiveCreditCardCharacter.propTypes = {};

InteractiveCreditCardCharacter.defaultProps = {};

export default InteractiveCreditCardCharacter;
