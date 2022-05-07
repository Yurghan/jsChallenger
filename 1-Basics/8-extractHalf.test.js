const extractHalf = require('./8-extractHalf');

test('Get first half of strig.', () => {
  expect(extractHalf('abcdefgh')).toBe('abcd');
  expect(extractHalf('1234')).toBe('12');
  expect(extractHalf('gedcba')).toBe('ged');
});
