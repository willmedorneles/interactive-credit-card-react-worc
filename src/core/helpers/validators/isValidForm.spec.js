import { isValidForm } from './isValidForm';

describe('isNotEmptyString helper test', () => {

  test('should not be null', () => {
    expect(isValidForm).toBeTruthy();
  });

  test('should return a FALSE for form with empty values and errors', () => {
    expect(isValidForm(
      {
        creditCardNumber:{value:'', error:''},
        creditCardHolder:{value:'', error:''},
        creditCardExpirationDateMonth:{value:'', error:''},
        creditCardExpirationDateYear:{value:'', error:''},
        creditCardCvv:{value:'', error:''}
      }
    )).toEqual(false);
  });

  test('should return a TRUE for form with values and empty errors', () => {
    const creditCardNumber = {value:'test', error:''};
    const creditCardHolder ={value:'test', error:''};
    const creditCardExpirationDateMonth = {value:'test', error:''};
    const creditCardExpirationDateYear = {value:'test', error:''};
    const creditCardCvv = {value:'test', error:''};
    expect(isValidForm(creditCardNumber, creditCardHolder, creditCardExpirationDateMonth, creditCardExpirationDateYear, creditCardCvv)).toEqual(true);
  });

  test('should return a FALSE for form with one error', () => {
    expect(isValidForm(
      {
        creditCardNumber:{value:'test', error:'ERROR'},
        creditCardHolder:{value:'test', error:''},
        creditCardExpirationDateMonth:{value:'test', error:''},
        creditCardExpirationDateYear:{value:'test', error:''},
        creditCardCvv:{value:'test', error:''}
      }
    )).toEqual(false);
  });
})

