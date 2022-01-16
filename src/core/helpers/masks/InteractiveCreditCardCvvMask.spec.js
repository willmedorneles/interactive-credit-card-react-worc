import { interactiveCreditCardCvvMask } from './InteractiveCreditCardCvvMask';

describe('InteractiveCreditCardCvvMask mask test', () => {
  test('must not be null', () => {
    expect(interactiveCreditCardCvvMask).toBeTruthy()
  });

  test('must return correctly masked credit card', () => {
    expect(interactiveCreditCardCvvMask('111')).toEqual('***');
  });

});