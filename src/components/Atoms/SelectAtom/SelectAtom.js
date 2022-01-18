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
  elementRef,
}) => {
  function handleOnFocus(event) {
    console.log(elementRef);
    if (onFocus) onFocus(event);
    if (setCurrentFocusedElement) setCurrentFocusedElement(elementRef);
  }

  function handleOnBlur(event) {
    console.log("");
    if (onFocus) onBlur(event);
    if (setCurrentFocusedElement) setCurrentFocusedElement(null);
  }

  return (
    <div className="SelectAtom" data-testid="SelectAtom">
      <select
        defaultValue={name}
        onChange={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        required={required}
        disabled={disabled}
        id={name}
      >
        <option value={name} disabled>
          {name}
        </option>
        {options.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectAtom.propTypes = {};

SelectAtom.defaultProps = {};

export default SelectAtom;
