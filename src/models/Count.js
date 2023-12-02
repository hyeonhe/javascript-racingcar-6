import { ERROR_MESSAGE } from "../constants/constant";

class Count {
  #count;
  constructor(inputCount) {
    this.#init(inputCount);
  }

  #init(inputCount) {
    const count = Number(inputCount);
    if (Object.is(count, NaN)) {
      throw new Error(ERROR_MESSAGE.numberError);
    }

    this.#count = count;
  }

  getCount() {
    return this.#count;
  }
}

export default Count;
