import { isValidCreditCardNumber } from './isValidCreditCardNumber';

describe('isValidCreditCardNumber helper test', () => {

  test('Should not be null', () => {
    expect(isValidCreditCardNumber).toBeTruthy();
  });

  test('should return a FALSE for empty string with spaces', () => {
    expect(isValidCreditCardNumber('  ')).toEqual(false);
  });

  test('should return a TRUE for valid visa card number', () => {
    expect(isValidCreditCardNumber('4916774164335585')).toEqual(true);
  });

  test('should return a TRUE for valid amex card number', () => {
    expect(isValidCreditCardNumber('345522566877210')).toEqual(true);
  });

  test('should return a TRUE for valid mastercard card number', () => {
    expect(isValidCreditCardNumber('5523106404670814')).toEqual(true);
  });

  test('should return a TRUE for valid discover card number', () => {
    expect(isValidCreditCardNumber('6011784832538113')).toEqual(true);
  });

  test('should return a TRUE for valid unionpay card number', () => {
    expect(isValidCreditCardNumber('6200128814892315')).toEqual(true);
  });

  test('should return a TRUE for valid diners card number', () => {
    expect(isValidCreditCardNumber('30036592321275')).toEqual(true);
  });

  test('should return a TRUE for valid jcb card number', () => {
    expect(isValidCreditCardNumber('3565318181026503908')).toEqual(true);
  });

  test('should return a TRUE for valid troy card number', () => {
    expect(isValidCreditCardNumber('9792819395507509')).toEqual(true);
  });
})

