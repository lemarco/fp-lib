import { Option } from "./option.mjs";
export class Result {
  #value;
  #isSuccess;
  constructor(value) {
    this.#isSuccess = !isError(value);
    this.#value = value;
  }

  static ok(value) {
    return new Result(value);
  }

  static err(errorMessage) {
    const result = new Result(null);
    result.isSuccess = false;
    result.error = errorMessage;
    return result;
  }

  some() {
    return this.#isSuccess ? Option.some(this.#value) : Option.none();
  }
  map(fn) {
    return this.#isSuccess ? Result.ok(fn(this.#value)) : this;
  }
  chain(fn) {
    return this.#isSuccess ? fn(this.value) : this;
  }
  toString() {
    return this.#isSuccess ? `Ok(${this.value})` : `Err(${this.value})`;
  }
}
