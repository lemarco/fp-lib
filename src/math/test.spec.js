import { inc, dec, mult, div, double, triple, half } from "./";

describe("inc function", () => {
  test("increments a number by 1", () => {
    expect(inc(5)).toEqual(6);
  });
});

describe("dec function", () => {
  test("decrements a number by 1", () => {
    expect(dec(8)).toEqual(7);
  });
});

describe("mult function", () => {
  test("multiplies two numbers", () => {
    expect(mult(4, 3)).toEqual(12);
  });
});

describe("div function", () => {
  test("divides two numbers", () => {
    expect(div(10, 2)).toEqual(5);
  });
});

describe("double function", () => {
  test("doubles a number", () => {
    expect(double(7)).toEqual(14);
  });
});

describe("triple function", () => {
  test("triples a number", () => {
    expect(triple(4)).toEqual(12);
  });
});

describe("half function", () => {
  test("divides a number by 2", () => {
    expect(half(9)).toEqual(4.5);
  });
});
