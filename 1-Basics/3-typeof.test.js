const getType = require('./3-typeof');

test('Get type of variable', () => {
  expect(getType(1)).toBe('number');
  expect(getType(false)).toBe('boolean');
  expect(getType({})).toBe('object');
  expect(getType(null)).toBe('object');
  expect(getType('string')).toBe('string');
  expect(getType(['array'])).toBe('object');
});
