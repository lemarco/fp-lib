import { pipe, compose, curry, partial, partialRight } from "./";

describe("Functional Utility Functions", () => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const square = (a) => a * a;
  const subtract = (a, b) => a - b;

  describe("pipe", () => {
    // Test case 1: Basic usage with two functions
    it("pipe - basic usage with two functions", () => {
      const addTwo = (x) => x + 2;
      const multiplyByThree = (x) => x * 3;

      const pipedFunctions = pipe(addTwo, multiplyByThree);

      // Test input of 5
      expect(pipedFunctions(5)).toEqual(21);
    });

    // Test case 2: Basic usage with three functions
    it("pipe - basic usage with three functions", () => {
      const square = (x) => x * x;
      const addFive = (x) => x + 5;
      const divideByTwo = (x) => x / 2;

      const pipedFunctions = pipe(square, addFive, divideByTwo);

      // Test input of 4
      expect(pipedFunctions(4)).toEqual(10.5);
    });

    // Test case 3: Usage with functions returning different types
    it("pipe - usage with functions returning different types", () => {
      const addTen = (x) => x + 10;
      const stringify = (x) => String(x);
      const length = (str) => str.length;

      const pipedFunctions = pipe(addTen, stringify, length);

      // Test input of 7
      expect(pipedFunctions(7)).toEqual(2);
    });
  });
});
describe("compose function", () => {
  const add2 = (x) => x + 2;
  const multiply3 = (x) => x * 3;
  const square = (x) => x * x;

  it("should return a function", () => {
    const result = compose();
    expect(typeof result).toBe("function");
  });

  it("should return the input if no functions are provided", () => {
    const input = 5;
    const result = compose()(input);
    expect(result).toBe(input);
  });

  it("should compose functions from right to left", () => {
    const input = 3;
    const expectedResult = square(multiply3(add2(input)));

    const composedFunction = compose(square, multiply3, add2);
    const result = composedFunction(input);

    expect(result).toBe(expectedResult);
  });
});
