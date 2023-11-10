import { Result } from "./result.mjs";
export class Option {
  #value;
  #hasValue;
  constructor(value) {
    this.#hasValue = value !== undefined && value !== null;
    if (this.#hasValue) {
      this.#value = value;
    }
  }

  map(f) {
    return this.#hasValue ? Option.some(f(this.#value)) : Option.none();
  }
  chain(fn) {
    return this.#hasValue ? fn(this.#value) : this;
  }
  toString() {
    return this.#hasValue ? `Some(${this.#value})` : "None";
  }
  ok() {
    return this.#hasValue
      ? Result.ok(this.#value)
      : Result.err(new Error("No value"));
  }
  static some(value) {
    return new Option(value);
  }

  static none() {
    return new Option(null);
  }
}
