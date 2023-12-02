class Cars {
  #carNames;

  constructor(cars) {
    this.init(cars);
  }

  init(carNames) {
    this.#splitCarNames(carNames);
  }

  #splitCarNames(cars) {
    const carNames = cars.split(",");
    this.#isValidCarNames(carNames);
  }

  #isValidCarNames(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5 || car.length < 1) {
        throw new Error("[ERROR] 이름은 5자 이하로 적어주세요.");
      }
    });

    this.#carNames = carNames;
  }

  getCarNames() {
    return this.#carNames;
  }
}

export default Cars;
