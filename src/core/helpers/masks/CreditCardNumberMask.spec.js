import { maskCreditCardNumber } from './CreditCardNumberMask';

describe('maskCreditCardNumber mask test', () => {
  test('must not be null', () => {
    expect(maskCreditCardNumber).toBeTruthy()
  });

  test('must return correctly masked credit card', () => {
    expect(maskCreditCardNumber(1111111111111111)).toEqual('1111 1111 1111 1111');
  });

});