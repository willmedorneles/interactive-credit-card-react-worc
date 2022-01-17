import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CreditCardBackgroundAtom.scss";
import { getRandomInt } from "../../../core/helpers/getRandomInt";
import { ImageAtom } from "../index";

const CreditCardBackgroundAtom = ({bgPath}) => {
  return (
    <div className="card-item__cover">
      <ImageAtom src={bgPath} class="card-item__bg"/>
    </div>
  );
};

CreditCardBackgroundAtom.propTypes = {};

CreditCardBackgroundAtom.defaultProps = {};

export default CreditCardBackgroundAtom;
