import { splitString } from './splitString';

describe('splitString componetent test', () => {

  test('must not be null', () => {
    expect(splitString).toBeTruthy();
  });

  test('must return correctly split String', () => {
    const result = splitString('Testing');
    expect(result).toEqual(['T','e','s','t','i','n','g']);
  });


});