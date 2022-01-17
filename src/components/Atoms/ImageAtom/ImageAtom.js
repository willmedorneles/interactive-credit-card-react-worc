import React from 'react';
import classNames from 'classnames';
import './ImageAtom.scss';

function ImageAtom({ src, alt, classes = {}}) {

  if( !src ) return '';

  const cssClasses = classNames({
    'atom-image': true,
    ...classes
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