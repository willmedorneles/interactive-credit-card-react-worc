import { splitString } from '../splitString';

function interactiveCreditCardCvvMask(inputValue){

  if( !inputValue ) return '';
  const splitedString = splitString(inputValue)

  return maskCharacters(splitedString);

}

function maskCharacters(array){
  const masked = array.map(() => {
    return '*';
  });
  return masked.join('')
}

export{
  interactiveCreditCardCvvMask
}