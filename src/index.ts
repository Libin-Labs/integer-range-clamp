export function clampInteger(value: number, min: number, max: number): number {
  if (![value, min, max].every(Number.isSafeInteger)) throw new TypeError('Expected safe integers');
  if (min > max) throw new RangeError('Minimum exceeds maximum');
  return Math.min(max, Math.max(min, value));
}
