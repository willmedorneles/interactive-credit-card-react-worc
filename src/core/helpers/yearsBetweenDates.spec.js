import { yearsBetweenDates } from './yearsBetweenDates';

describe('yearsBetweenDates componetent test', () => {

  test('must not be null', () => {
    expect(yearsBetweenDates).toBeTruthy();
  });

  test('must return default message', () => {
    const result = yearsBetweenDates('May 2020', 'May 2025');
    expect(result).toEqual([2020, 2021, 2022, 2023, 2024, 2025]);
  });


});