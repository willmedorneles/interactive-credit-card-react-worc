import React from 'react';
import classNames from 'classnames';
import './CardAtom.scss';

function CardAtom({children,}) {


  const cssClasses = classNames({
    'molecule-card': true
  });

  return (
    <div className={cssClasses}>
      {children}
    </div>
  );
}

export default CardAtom;