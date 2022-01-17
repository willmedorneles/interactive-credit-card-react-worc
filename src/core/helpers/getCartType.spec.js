import { getCardType } from './getCardType';

describe('getLastTwoCharacters component test', () => {
  test('must be not null', () => {
    expect(getCardType).toBeTruthy();
  });

  test('must return visa', () => {
    const cardType = getCardType('4916774164335585')
    expect(cardType).toEqual('visa');
  });

  test('must return amex', () => {
    const cardType = getCardType('345522566877210')
    expect(cardType).toEqual('amex');
  });

  test('must return mastercard', () => {
    const cardType = getCardType('5523106404670814')
    expect(cardType).toEqual('mastercard');
  });

  test('must return discover', () => {
    const cardType = getCardType('6011784832538113')
    expect(cardType).toEqual('discover');
  });

  test('must return unionpay', () => {
    const cardType = getCardType('6200128814892315')
    expect(cardType).toEqual('unionpay');
  });

  test('must return diners', () => {
    const cardType = getCardType('30036592321275')
    expect(cardType).toEqual('diners');
  });

  test('must return jcb', () => {
    const cardType = getCardType('3565318181026503908')
    expect(cardType).toEqual('jcb');
  });

  test('must return troy', () => {
    const cardType = getCardType('9792819395507509')
    expect(cardType).toEqual('troy');
  });

  test('must return false', () => {
    const cardType = getCardType('1111111111111111')
    expect(cardType).toEqual(false);
  });
});