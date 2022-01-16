import React from 'react';
import classNames from 'classnames';
import './ButtonAtom.scss';

function ButtonAtom({children, onClick, type = 'button', disabled = false }) {

    if( !children ) return '';
  
    const cssClasses = classNames({
      'atom-button': true,
      'atom-button--primary': true,
      'atom-button--block': true
    });
  
    return (
        <button 
          disabled={disabled}
          type={type}
          className={cssClasses}
          onClick={onClick}
        >
          {children}
        </button> 
    );
  }
  
  export default ButtonAtom;