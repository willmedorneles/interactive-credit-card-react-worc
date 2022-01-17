import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputAtom.scss";

const InputAtom = ({
  name,
  type,
  value,
  onChange,
  onBlurAction,
  required = true,
  disabled,
  onFocus = () => {},
  setCurrentFocusElement,
  elementRef,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  const handleBlur = (event) => {
    setIsDirty(true);
    if (onBlurAction) {
      onBlurAction(event);
    }
    if (setCurrentFocusElement) setCurrentFocusElement(null);
  };

  const handleFocus = (event) => {
    if (onFocus) onFocus(event);
    if (setCurrentFocusElement) setCurrentFocusElement(elementRef);
    console.log("setCurrentFocusElement Atom", setCurrentFocusElement);
    console.log("elementRef", elementRef);

  };

  return (
    <div className="InputAtom" data-testid="InputAtom">
      <input
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
