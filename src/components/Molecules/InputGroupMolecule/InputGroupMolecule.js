import React from 'react';
import PropTypes from 'prop-types';
import './InputGroupMolecule.scss';
import { InputAtom, LabelAtom } from '../../Atoms';

const InputGroupMolecule = (props) => {
  return (
    <div className="InputGroupMolecule" data-testid="InputGroupMolecule">
      <LabelAtom>{props.input.label}</LabelAtom>
      <InputAtom onFocus={props.onFocus} onBlurAction={props.onBlur} {...props.input}></InputAtom>
    </div>
  );
}

InputGroupMolecule.propTypes = {};

InputGroupMolecule.defaultProps = {};

export default InputGroupMolecule;
