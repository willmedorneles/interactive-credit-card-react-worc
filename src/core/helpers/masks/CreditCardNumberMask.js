import VMasker from 'vanilla-masker';

function maskCreditCardNumber(inputValue){
  
  if( !inputValue ) return '';

  return VMasker.toPattern(inputValue, '9999 9999 9999 9999 999');

}

export{
  maskCreditCardNumber
}