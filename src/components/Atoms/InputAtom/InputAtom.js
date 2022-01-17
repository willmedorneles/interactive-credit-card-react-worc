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
  onFocus = () => {}
}) => {
  const [isDirty, setIsDirty] = useState(false);

  const handleBlur = (event) => {
    setIsDirty(true);
    if( onBlurAction ) {
      onBlurAction(event);
    }
  };

  return (
    <div className="InputAtom" data-testid="InputAtom">
      <input 
        id={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={onFocus.bind(this)}
        required={required}
        disabled={disabled}>
      </input>
    </div>
  );
}

InputAtom.propTypes = {};

InputAtom.defaultProps = {};

export default InputAtom;
