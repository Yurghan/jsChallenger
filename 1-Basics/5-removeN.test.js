const removeN = require('./5-removeN');

test('Remove first three characters of string.', () => {
  expect(removeN('abcdefg')).toBe('defg');
  expect(removeN('1234')).toBe('4');
  expect(removeN('fgedcba')).toBe('dcba');
});
