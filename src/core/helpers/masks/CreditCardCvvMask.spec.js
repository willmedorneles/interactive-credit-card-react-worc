import { maskCreditCardCvvMask } from './CreditCardCvvMask';

describe('maskCreditCardCvvMask mask test', () => {
  test('must not be null', () => {
    expect(maskCreditCardCvvMask).toBeTruthy()
  });

  test('must return correctly masked credit card', () => {
    expect(maskCreditCardCvvMask(1234)).toEqual('1234');
  });

});