export const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const isString = (s) => typeof s === "string";
export const isNumber = (n) => typeof n === "number";
export const isError = (e) =>
  e &&
  e.stack &&
  e.message &&
  typeof e.stack === "string" &&
  typeof e.message === "string";
