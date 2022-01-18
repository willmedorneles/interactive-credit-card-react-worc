import { yearsBetweenDates, maskCreditCardNumber, maskCreditCardCvvMask, isValidCreditCardNumber, isNotEmptyString } from "../../../core/helpers";
const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
const years = yearsBetweenDates('January 2022', 'January 2030');

const initialState = {
  creditCardNumber: {
    label: "Card Number",
    name: "cardNumber",
    value: "",
    error: "",
    required: true,
    validator: isValidCreditCardNumber,
    mask: maskCreditCardNumber,
  },
  creditCardHolder: {
    label: "Card Holder",
    name: "cardHolder",
    value: "",
    error: "",
    required: true,
    validator: isNotEmptyString
  },
  creditCardExpirationDateMonth: {
    label: "Expiration Date",
    name: "Month",
    value: `Month`,
    options: months,
    error: "",
    required: true,
    validator: (value) => {return months.includes(value)},
  },
  creditCardExpirationDateYear: {
    label: "Expiration Date",
    name: "Year",
    value: `Year`,
    options: years,
    error: "",
    required: true,
    validator: (value) => { years.includes(value)},
  },
  creditCardCvv: {
    label: "CVV",
    name: "creditCardCCV",
    value: '',
    error: "",
    required: true,
    validator: (value) => {return value.length === 3 || value.length === 4},
    mask: maskCreditCardCvvMask
  }
};

export { initialState };
