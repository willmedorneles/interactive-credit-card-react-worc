import { getCardType, stripWhiteSpaces } from '../index'
function isValidCreditCardNumber(numberString){
  numberString = stripWhiteSpaces(numberString);
  return numberString.length <= 19 && numberString.length >= 14 && getCardType(numberString)!== false;
}
export { isValidCreditCardNumber };