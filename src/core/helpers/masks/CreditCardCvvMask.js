import VMasker from 'vanilla-masker';

function maskCreditCardCvvMask(inputValue){
  
  if( !inputValue ) return '';

  return VMasker.toPattern(inputValue, '9999');

}

export{
  maskCreditCardCvvMask
}