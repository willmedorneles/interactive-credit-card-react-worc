import React from 'react';
import PropTypes from 'prop-types';
import './InputGroupMolecule.scss';
import { InputAtom } from '../../Atoms';

const InputGroupMolecule = (props) => (
  <div className="InputGroupMolecule" data-testid="InputGroupMolecule">
    <InputAtom {...props.input}></InputAtom>
  </div>
);

InputGroupMolecule.propTypes = {};

InputGroupMolecule.defaultProps = {};

export default InputGroupMolecule;
