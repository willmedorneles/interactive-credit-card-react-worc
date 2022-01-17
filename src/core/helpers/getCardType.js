const cardRegexs = {
  visa: /^4/,
  amex: /^(34|37)/,
  mastercard: /^5[1-5]/,
  discover: /^6011/,
  unionpay: /^62/,
  troy: /^9792/,
  diners: /^(30[0-5]|36)/,
  jcb: /^(?:2131|1800|35[0-9]{3})/
};

function getCardType(cardNumber){
  let type = false;
  Object.keys(cardRegexs).forEach(element =>{
    if(cardRegexs[element].test(cardNumber)) type = element;
  })
  return type;
}

export { getCardType }