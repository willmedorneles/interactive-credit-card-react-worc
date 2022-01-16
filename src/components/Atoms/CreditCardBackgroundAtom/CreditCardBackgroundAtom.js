import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CreditCardBackgroundAtom.scss";
import { getRandomInt } from "../../../core/helpers/getRandomInt";

const CreditCardBackgroundAtom = ({ children }) => {
  const [bgPath, setBgPath] = useState('/img/1.png')
  
  useEffect(() =>{
    const backgroundNumber = getRandomInt(1,25);
    setBgPath(`/img/${backgroundNumber}.jpeg`);
  },[]);
  
  return (
    <div
      className="CreditCardBackgroundAtom"
      data-testid="CreditCardBackgroundAtom"
      style={{
        backgroundImage:`url(${bgPath})`
      }}
    >
      {children}
    </div>
  );
};

CreditCardBackgroundAtom.propTypes = {};

CreditCardBackgroundAtom.defaultProps = {};

export default CreditCardBackgroundAtom;
