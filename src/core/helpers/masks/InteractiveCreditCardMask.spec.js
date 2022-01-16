import { interactiveCreditCardMask } from './InteractiveCreditCardMask';

describe('maskCreditCardNumber mask test', () => {
  test('must not be null', () => {
    expect(interactiveCreditCardMask).toBeTruthy()
  });

  test('must return correctly masked credit card', () => {
    expect(interactiveCreditCardMask('1111 1111 1111 1111')).toEqual('1111 **** **** 1111');
  });

});