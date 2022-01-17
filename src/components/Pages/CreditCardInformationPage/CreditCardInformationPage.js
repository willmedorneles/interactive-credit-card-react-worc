import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CreditCardInformationPage.scss";
import { useFormField } from "../../../core/hooks/useFormField";
import { initialState } from "./InitialState";
import { CreditCardInformationTemplate } from "../../Templates";
import { getCardType, isValidForm } from "../../../core/helpers";

const CreditCardInformationPage = () => {
  const creditCardNumber = useFormField(initialState.creditCardNumber);
  const creditCardHolder = useFormField(initialState.creditCardHolder);
  const creditCardExpirationDateMonth = useFormField(
    initialState.creditCardExpirationDateMonth
  );
  const creditCardExpirationDateYear = useFormField(
    initialState.creditCardExpirationDateYear
  );
  const creditCardCvv = useFormField(initialState.creditCardCvv);

  const [creditCardType, setcreditCardType] = useState("visa");
  const [showBackCard, setShowBackCard] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  useEffect(() => {
    if (
      isValidForm(
        creditCardNumber,
        creditCardHolder,
        creditCardExpirationDateMonth,
        creditCardExpirationDateYear,
        creditCardCvv
      )
    ) {
      setReadyToSubmit(true);
      console.log('foi')
    }
  }, [
    creditCardNumber,
    creditCardHolder,
    creditCardExpirationDateMonth,
    creditCardExpirationDateYear,
    creditCardCvv,
  ]);

  function formSubmit(){
    if(readyToSubmit){
      alert(
        creditCardNumber,
        creditCardHolder,
        creditCardExpirationDateMonth,
        creditCardExpirationDateYear,
        creditCardCvv
      );
    }else{
      alert('Please, fill al the fields with correct information');
    }
  }

  useEffect(() => {
    const cardType = getCardType(creditCardNumber.value);
    if (creditCardNumber.value != "" && cardType) {
      setcreditCardType(cardType);
    }
  }, [creditCardNumber.value]);
  return (
    <section className="CreditCardPage">
      <CreditCardInformationTemplate
        fields={{
          creditCardNumber,
          creditCardHolder,
          creditCardExpirationDateMonth,
          creditCardExpirationDateYear,
          creditCardCvv,
        }}
        creditCardInformation={{
          creditCardType,
          creditCardNumber,
          creditCardHolder,
          creditCardExpirationDate: {
            creditCardExpirationDateMonth,
            creditCardExpirationDateYear,
          },
          creditCardCvv,
        }}
        formSubmit={formSubmit}
        showBackCard={showBackCard}
        setShowBackCard={setShowBackCard}
      ></CreditCardInformationTemplate>
    </section>
  );
};

CreditCardInformationPage.propTypes = {};

CreditCardInformationPage.defaultProps = {};

export default CreditCardInformationPage;
