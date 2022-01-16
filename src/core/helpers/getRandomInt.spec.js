import { getRandomInt } from './getRandomInt';

describe('getRandomInt componetent test', () => {
  test('must return 1', () => {
    const number = getRandomInt(1,1);
    expect(number).toEqual(1);
  });

  test('must return a number betwen 1 and 100', () => {
    const number = getRandomInt(1,100);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(100);
  });
});