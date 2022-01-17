import React from "react";
import PropTypes from "prop-types";
import "./SelectAtom.scss";

const SelectAtom = ({
  name,
  onChange,
  onBlur,
  required = true,
  disabled,
  options = [],
  onFocus,
  setCurrentFocusedElement,
  elementRef
}) => {
  function handleOnFocus(event){
    if(onFocus) onFocus(event);
    if(setCurrentFocusedElement) setCurrentFocusedElement(elementRef)
  }
  return (
    <div className="SelectAtom" data-testid="SelectAtom">
      <select defaultValue={name} onChange={onChange} onFocus={handleOnFocus} onBlur={onBlur} required={required} disabled={disabled}>
        <option value={name} disabled>
          {name}
        </option>
        {
          options.map((value, index) => {
            return <option key={index} value={value}>
              {value}
            </option>
          })
        }
      </select>
    </div>
  );
}

SelectAtom.propTypes = {};

SelectAtom.defaultProps = {};

export default SelectAtom;
