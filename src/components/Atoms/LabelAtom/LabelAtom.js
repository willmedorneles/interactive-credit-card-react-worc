import React from 'react';
import './label-atom.scss';

function LabelAtom({htmlFor, children}) {

  if( !children ) return '';

  return (
    <label className="atom-label" htmlFor={htmlFor}>
      { children }
    </label>
  );
}

export default LabelAtom;