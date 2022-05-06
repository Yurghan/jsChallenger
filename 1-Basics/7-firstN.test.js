const firstN = require('./7-firstN');

test('Get first 3 characters of string.', () => {
  expect(firstN('abcdefg')).toBe('abc');
  expect(firstN('1234')).toBe('123');
  expect(firstN('fgedcba')).toBe('fge');
});
