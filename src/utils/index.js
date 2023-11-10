export const pipe =
  (...funcs) =>
  (input) =>
    funcs.reduce((acc, curr) => curr(acc), input);
export const compose =
  (...funcs) =>
  (input) =>
    funcs.reduceRight((acc, curr) => curr(acc), input);
export const curry = (f) => {
  return function curried(...args) {
    return args.length >= f.length
      ? f.apply(this.args)
      : (...args2) => curried.apply(this, args.concat(args2));
  };
};
export const partial =
  (f, ...pargs) =>
  (...args) =>
    f.apply(this, pargs.concat(args));

export const partialRight =
  (f, ...pargs) =>
  (...args) =>
    f.apply(null, args.concat(pargs));
