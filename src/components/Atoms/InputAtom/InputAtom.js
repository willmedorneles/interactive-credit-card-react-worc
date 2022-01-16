import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputAtom.scss";

const InputAtom = ({
  name,
  type,
  value,
  onChange,
  onBlur,
  required = true,
  disabled
}) => {
  const [isDirty, setIsDirty] = useState(false);

  const handleBlur = (event) => {
    setIsDirty(true);

    if( onBlur ) {
      onBlur(event);
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
        required={required}
        disabled={disabled}>
      </input>
    </div>
  );
}

InputAtom.propTypes = {};

InputAtom.defaultProps = {};

export default InputAtom;
