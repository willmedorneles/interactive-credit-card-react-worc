import React from "react";
import PropTypes from "prop-types";
import "./SelectGroupMolecule.scss";
import { SelectAtom, LabelAtom } from "../../Atoms";

const SelectGroupMolecule = (props) => (
  <div className="SelectGroupMolecule" data-testid="SelectGroupMolecule">
    <LabelAtom frontLabel={true}>{props.label}</LabelAtom>
    <div className="select-wrapper">
      <SelectAtom
        setCurrentFocusedElement={props.setCurrentFocusedElement}
        elementRef={props.elementRef}
        {...props.creditCardExpirationDateMonth}
      ></SelectAtom>
    </div>
    <div className="select-wrapper">
      <SelectAtom
        setCurrentFocusedElement={props.setCurrentFocusedElement}
        elementRef={props.elementRef}
        {...props.creditCardExpirationDateYear}
      ></SelectAtom>
    </div>
  </div>
);

SelectGroupMolecule.propTypes = {};

SelectGroupMolecule.defaultProps = {};

export default SelectGroupMolecule;
