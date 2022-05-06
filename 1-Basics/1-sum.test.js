const sum = require('./1-sum.js');

test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 10)).toBe(11);
  expect(sum(99, 1)).toBe(100);
});
