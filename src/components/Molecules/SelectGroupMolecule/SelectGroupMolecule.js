import React from 'react';
import PropTypes from 'prop-types';
import './SelectGroupMolecule.scss';
import {SelectAtom, LabelAtom} from '../../Atoms';

const SelectGroupMolecule = (props) => (
  <div className="SelectGroupMolecule" data-testid="SelectGroupMolecule">
    <LabelAtom>{props.label}</LabelAtom>
    <div>
      <SelectAtom {...props.creditCardExpirationDateMonth}></SelectAtom>
    </div>
    <div>
      <SelectAtom {...props.creditCardExpirationDateYear}></SelectAtom>
    </div>
  </div>
);

SelectGroupMolecule.propTypes = {};

SelectGroupMolecule.defaultProps = {};

export default SelectGroupMolecule;
