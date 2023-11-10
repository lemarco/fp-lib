import { pipe, compose, curry, partial, partialRight } from "./";

describe("Functional Utility Functions", () => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const square = (a) => a * a;
  const subtract = (a, b) => a - b;

  describe("pipe", () => {
    it("should compose functions left-to-right", () => {
      const pipedFunc = pipe(add, multiply, square);
      expect(pipedFunc(2, 3)).toBe(100); // ((2 + 3) * 2)^2 = 100
    });
  });

  describe("compose", () => {
    it("should compose functions right-to-left", () => {
      const composedFunc = compose(add, multiply, square);
      expect(composedFunc(2, 3)).toBe(25); // (2 + (3 * 2))^2 = 25
    });
  });

  describe("curry", () => {
    it("should curry a function", () => {
      const curriedFunc = curry(add);
      expect(curriedFunc(2)(3)).toBe(5);
    });
  });

  describe("partial", () => {
    it("should partially apply arguments from the left", () => {
      const partiallyAppliedFunc = partial(subtract, 10);
      expect(partiallyAppliedFunc(7)).toBe(3); // 10 - 7 = 3
    });
  });

  describe("partialRight", () => {
    it("should partially apply arguments from the right", () => {
      const partiallyAppliedFunc = partialRight(subtract, 10);
      expect(partiallyAppliedFunc(7)).toBe(-3); // 7 - 10 = -3
    });
  });
});
