import { RANDOM_NUMBER } from "../constants/constant";
import Cars from "../models/Cars";
import Count from "../models/Count";
import generateRandomNumber from "../utils/generateRandomNumber";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";

class CarController {
  async init() {
    const carNames = await this.getCarNames();
    const counts = await this.getCount();

    const carForwards = new Array(carNames.length).fill(0);
    OutputView.printResult();
    this.playRounds(counts, carNames, carForwards);
  }

  async getCarNames() {
    const carNamesInput = await InputView.carNames();
    const cars = new Cars(carNamesInput);
    return cars.getCarNames();
  }

  async getCount() {
    const inputCount = await InputView.count();
    const count = new Count(inputCount);
    return count.getCount();
  }

  playRounds(counts, carNames, carForwards) {
    for (let i = 0; i < counts; i++) {
      this.moveCars(carForwards);
      this.printCarStatus(carNames, carForwards);
    }
  }

  moveCars(carForwards) {
    carForwards.forEach((_, j) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= RANDOM_NUMBER.minRange) {
        carForwards[j] += 1;
      }
    });
  }

  printCarStatus(carNames, carForwards) {
    carNames.forEach((car, i) => {
      const dashed = "-".repeat(carForwards[i]);
      OutputView.printCarStatus(car, dashed);
    });
  }
}

export default CarController;
