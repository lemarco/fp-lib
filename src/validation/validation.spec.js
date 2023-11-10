import { isEmail, isString, isNumber, isError } from "./";

describe("Validation Functions", () => {
  describe("isString", () => {
    it("should return true for a valid string", () => {
      expect(isString("hello")).toBe(true);
    });

    it("should return false for a non-string value", () => {
      expect(isString(42)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true for a valid number", () => {
      expect(isNumber(42)).toBe(true);
    });

    it("should return false for a non-number value", () => {
      expect(isNumber("42")).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });

  describe("isError", () => {
    it("should return true for a valid error object", () => {
      const error = new Error("Test Error");
      expect(isError(error)).toBe(true);
    });

    it("should return false for a non-error value", () => {
      expect(isError("error")).toBe(false);
      expect(isError({})).toBe(false);
      expect(isError([])).toBe(false);
    });
  });

  describe("isEmail", () => {
    it("should return true for a valid email string", () => {
      const validEmail = "test@example.com";
      expect(isEmail(validEmail)).toBe(true);
    });

    it("should return false for an invalid email string", () => {
      const invalidEmail = "invalid-email";
      expect(isEmail(invalidEmail)).toBe(false);
    });

    it("should return false for a non-string value", () => {
      expect(isEmail(42)).toBe(false);
      expect(isEmail({})).toBe(false);
      expect(isEmail([])).toBe(false);
    });
  });

  describe("pipe", () => {
    it("should correctly compose isString and testEmailString", () => {
      expect(isEmail("test@example.com")).toBe(true);
      expect(isEmail(42)).toBe(false);
      expect(isEmail("invalid-email")).toBe(false);
    });
  });
});
