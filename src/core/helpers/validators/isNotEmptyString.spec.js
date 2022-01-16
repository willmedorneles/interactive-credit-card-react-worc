import { isNotEmptyString } from './isNotEmptyString';

describe('isNotEmptyString helper test', () => {

  test('should return a FALSE for empty string', () => {
    expect(isNotEmptyString('')).toEqual(false);
  });

  test('should return a FALSE for empty string with spaces', () => {
    expect(isNotEmptyString('  ')).toEqual(false);
  });

  test('should return a TRU for a NON empty string', () => {
    expect(isNotEmptyString('Teste')).toEqual(true);
  });
})

