import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import "./InputAtom.scss";

const InputAtom = ({
  name,
  type,
  value,
  onChange,
  onBlur,
  additionalBlurEvent,
  required = true,
  disabled,
  onFocus = () => {},
  setCurrentFocusElement,
  elementRef,
  error
}) => {
  const [isDirty, setIsDirty] = useState(false);

  const handleBlur = (event) => {
    setIsDirty(true);
    if (onBlur) {
      onBlur(event);
    }
    if(additionalBlurEvent) additionalBlurEvent(event);
    if (setCurrentFocusElement) setCurrentFocusElement(null);
  };

  const handleFocus = (event) => {
    if (onFocus) onFocus(event);
    if (setCurrentFocusElement) setCurrentFocusElement(elementRef);

  };

  const cssClasses = classNames({
    'atom-input': true,
    'atom-input-valid': error === '' && value !== '',
    'atom-input-invalid': error !== '' && value !== ''
  });

  return (
    <div className="InputAtom" data-testid="InputAtom">
      <input
        className={cssClasses}
        id={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        required={required}
        disabled={disabled}
      ></input>
    </div>
  );
};

InputAtom.propTypes = {};

InputAtom.defaultProps = {};

export default InputAtom;
