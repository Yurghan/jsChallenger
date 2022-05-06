const compare = require('./2-comparison');

test('Properly compare if both variables are same value and type', () => {
  expect(compare(2, 3)).toBe(false);
  expect(compare(3, 3)).toBe(true);
  expect(compare(1, '1')).toBe(false);
  expect(compare('10', '10')).toBe(true);
});
