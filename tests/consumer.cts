import * as api from '@lp-labs/integer-range-clamp';
import { clampInteger } from '@lp-labs/integer-range-clamp';
console.log(clampInteger(12, 0, 10));
// @ts-expect-error invalid argument must be rejected by declarations
api.clampInteger('1', 0, 2);
