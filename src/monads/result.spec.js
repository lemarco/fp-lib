import { Result } from "./result";
describe("Result", () => {
  describe("map", () => {
    test("maps over an Ok value", () => {
      const result = Result.ok(5);
      const mappedResult = result.map((x) => x * 2);
      expect(mappedResult.toString()).toBe("Ok(10)");
    });

    test("maps over an Err value", () => {
      const result = Result.err("Error message");
      const mappedResult = result.map((x) => x * 2);
      expect(mappedResult.toString()).toBe("Err(Error message)");
    });
  });

  describe("chain", () => {
    test("chains over an Ok value", () => {
      const result = Result.ok(5);
      const chainedResult = result.chain((x) => Result.ok(x * 2));
      expect(chainedResult.toString()).toBe("Ok(10)");
    });

    test("chains over an Err value", () => {
      const result = Result.err("Error message");
      const chainedResult = result.chain((x) => Result.ok(x * 2));
      expect(chainedResult.toString()).toBe("Err(Error message)");
    });
  });

  describe("toString", () => {
    test("prints Ok value", () => {
      const result = Result.ok(5);
      expect(result.toString()).toBe("Ok(5)");
    });

    test("prints Err value", () => {
      const result = Result.err("Error message");
      expect(result.toString()).toBe("Err(Error message)");
    });
  });

  describe("some", () => {
    test("returns Option.some with a value for Ok", () => {
      const result = Result.ok(5);
      const option = result.some();
      expect(option.toString()).toBe("Some(5)");
    });

    test("returns Option.none for Err", () => {
      const result = Result.err("Error message");
      const option = result.some();
      expect(option.toString()).toBe("None");
    });
  });
});
