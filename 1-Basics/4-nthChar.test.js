const nthChar = require('./4-nthChar');

test('Get nth character of string', () => {
  expect(nthChar('abcd', 1)).toBe('a');
  expect(nthChar('zyxbwpl', 5)).toBe('w');
  expect(nthChar('gfedcba', 3)).toBe('e');
});
