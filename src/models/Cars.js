import { ERROR_MESSAGE } from "../constants/constant";

class Cars {
  #carNames;

  constructor(cars) {
    this.#splitCarNames(cars);
  }

  #splitCarNames(cars) {
    const carNames = cars.split(",");
    this.#isValidCarNames(carNames);
  }

  #isValidCarNames(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5 || car.length < 1) {
        throw new Error(ERROR_MESSAGE.carNameError);
      }
    });

    this.#carNames = carNames;
  }

  getCarNames() {
    return this.#carNames;
  }
}

export default Cars;
