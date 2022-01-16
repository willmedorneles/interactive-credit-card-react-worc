import { stripWhiteSpaces } from './stripWhiteSpaces';

describe('stripWhiteSpaces componetent test', () => {

  test('must not be null', () => {
    expect(stripWhiteSpaces).toBeTruthy();
  });

  test('must return string without white spaces', () => {
    const result = stripWhiteSpaces('T e  s   t   ing');
    expect(result).toEqual('Testing');
  });

});