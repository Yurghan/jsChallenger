const lastN = require('./6-lastN');

test('Get last 3 characters from a string.', () => {
  expect(lastN('abcdefg')).toBe('efg');
  expect(lastN('1234')).toBe('234');
  expect(lastN('fgedcba')).toBe('cba');
});
