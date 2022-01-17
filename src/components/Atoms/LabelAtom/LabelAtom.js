import React from 'react';
import classNames from 'classnames';
import './label-atom.scss';

function LabelAtom({htmlFor, children, frontLabel = false}) {

  if( !children ) return '';
  const cssClasses = classNames({
    'atom-label': true,
    'front-label': frontLabel
  });
  return (
    <label className={cssClasses} htmlFor={htmlFor}>
      { children }
    </label>
  );
}

export default LabelAtom;