import { Option } from "./option";
import { Result } from "./result";

describe("Option", () => {
  describe("map", () => {
    test("maps over a Some value", () => {
      const option = Option.some(5);
      const result = option.map((x) => x * 2);
      expect(result.toString()).toBe("Some(10)");
    });

    test("maps over a None value", () => {
      const option = Option.none();
      const result = option.map((x) => x * 2);
      expect(result.toString()).toBe("None");
    });
  });

  describe("chain", () => {
    test("chains over a Some value", () => {
      const option = Option.some(5);
      const result = option.chain((x) => Option.some(x * 2));
      expect(result.toString()).toBe("Some(10)");
    });

    test("chains over a None value", () => {
      const option = Option.none();
      const result = option.chain((x) => Option.some(x * 2));
      expect(result.toString()).toBe("None");
    });
  });

  describe("toString", () => {
    test("prints Some value", () => {
      const option = Option.some(5);
      expect(option.toString()).toBe("Some(5)");
    });

    test("prints None value", () => {
      const option = Option.none();
      expect(option.toString()).toBe("None");
    });
  });

  describe("ok", () => {
    test("returns Result.ok with a value", () => {
      const option = Option.some(5);
      const result = option.ok();
      expect(result.toString()).toBe("Ok(5)");
    });

    test("returns Result.err with no value", () => {
      const option = Option.none();
      const result = option.ok();
      expect(result.toString()).toBe("Err(No value)");
    });
  });
});

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
