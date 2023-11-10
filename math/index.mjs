import { partialRight } from "../";
export const inc = (v) => v + 1;
export const dec = (v) => v - 1;
export const mult = (v, m) => v * m;
export const div = (v, d) => v / d;
export const double = partialRight(mult, 2);
export const triple = partialRight(mult, 3);
export const half = partialRight(div, 2);
