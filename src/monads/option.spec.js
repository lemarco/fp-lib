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
