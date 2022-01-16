import React from 'react';
import PropTypes from 'prop-types';
import './InputGroupMolecule.scss';
import { InputAtom, LabelAtom } from '../../Atoms';

const InputGroupMolecule = (props) => (
  <div className="InputGroupMolecule" data-testid="InputGroupMolecule">
    <LabelAtom>{props.input.label}</LabelAtom>
    <InputAtom {...props.input}></InputAtom>
  </div>
);

InputGroupMolecule.propTypes = {};

InputGroupMolecule.defaultProps = {};

export default InputGroupMolecule;
