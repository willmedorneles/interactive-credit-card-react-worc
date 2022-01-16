import VMasker from 'vanilla-masker';
import { splitString } from '../splitString';

function interactiveCreditCardMask(inputValue){

  if( !inputValue ) return '';
  const splitedString = splitString(inputValue)

  return maskCharacters(splitedString);

}

function maskCharacters(array){
  const masked = array.map((element, index) => {
    if(index >= 5 && index<= 13 && element !== " "){
      return '*';
    }
    return element;
  });
  return masked.join('')
}

export{
  interactiveCreditCardMask
}