import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns in-range value', () => {
  assert.equal(api.clampInteger(5, 0, 10), 5);
});
test('clamps below minimum', () => {
  assert.equal(api.clampInteger(-1, 0, 10), 0);
});
test('clamps above maximum', () => {
  assert.equal(api.clampInteger(11, 0, 10), 10);
});
test('supports equal bounds', () => {
  assert.equal(api.clampInteger(5, 3, 3), 3);
});
test('supports negative bounds', () => {
  assert.equal(api.clampInteger(-5, -10, -2), -5);
});
test('rejects reversed bounds', () => {
  assert.throws(() => api.clampInteger(1, 4, 2), RangeError);
});
