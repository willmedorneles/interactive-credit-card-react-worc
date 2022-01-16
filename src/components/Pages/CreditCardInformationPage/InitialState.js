import { yearsBetweenDates, maskCreditCardNumber } from "../../../core/helpers";

const initialState = {
  creditCardNumber: {
    label: "Card Number",
    name: "cardNumber",
    value: "",
    error: "",
    validator: (value) => true,
    mask: maskCreditCardNumber,
  },
  creditCardHolder: {
    label: "Card Holder",
    name: "cardHolder",
    value: "",
    error: "",
    validator: (value) => true,
    mask: (value) => value,
  },

  creditCardExpirationDateMonth: {
    label: "Expiration Date",
    name: "Month",
    value: `Month`,
    options: [1,2,3,4,5,6,7,8,9,10,11,12],
    error: "",
    validator: (value) => true,
    mask: (value) => value,
  },
  creditCardExpirationDateYear: {
    label: "Expiration Date",
    name: "Year",
    value: `Year`,
    options: yearsBetweenDates('January 2022', 'January 2030'),
    error: "",
    validator: (value) => true,
    mask: (value) => value,
  },
  creditCardCvv: {
    label: "CVV",
    name: "creditCardCCV",
    value: '',
    error: "",
    validator: (value) => true,
    mask: (value) => value,
  }
};

export { initialState };
