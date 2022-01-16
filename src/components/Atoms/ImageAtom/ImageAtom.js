import React from 'react';
import classNames from 'classnames';
import './ImageAtom.scss';

function ImageAtom({ src, alt }) {

  if( !src ) return '';

  const cssClasses = classNames({
    'atom-image': true,
  });

  return (
   <img 
      src={src}
      alt={alt}
      className={cssClasses}
    />
  );
}

export default ImageAtom;