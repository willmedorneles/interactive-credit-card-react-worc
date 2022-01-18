import React from "react";
import PropTypes from "prop-types";
import "./InputGroupMolecule.scss";
import { InputAtom, LabelAtom } from "../../Atoms";

const InputGroupMolecule = (props) => {
  return (
    <div className="InputGroupMolecule" data-testid="InputGroupMolecule">
      <LabelAtom>{props.input.label}</LabelAtom>
      <InputAtom
        elementRef={props.elementRef}
        setCurrentFocusElement={props.setCurrentFocusedElement}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        additionalBlurEvent={props.onFocusOut}
        {...props.input}
      ></InputAtom>
    </div>
  );
};

InputGroupMolecule.propTypes = {};

InputGroupMolecule.defaultProps = {};

export default InputGroupMolecule;
