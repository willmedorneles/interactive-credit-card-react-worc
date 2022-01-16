import { getLastTwoCharacters } from './getLastTwoCharacters';

describe('getLastTwoCharacters componetent test', () => {
  test('must be not null', () => {
    expect(getLastTwoCharacters).toBeTruthy();
  });

  test('must return a number betwen 1 and 100', () => {
    const characters = getLastTwoCharacters('abscde');
    expect(characters).toEqual('de');
    
  });
});