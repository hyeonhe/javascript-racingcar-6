import { RANDOM_NUMBER } from "../constants/constant";
import Cars from "../models/Cars";
import Count from "../models/Count";
import generateRandomNumber from "../utils/generateRandomNumber";
import InputView from "../views/InputView";
import OutputView from "../views/outputView";

class CarController {
  async init() {
    const carNamesInput = await InputView.carNames();
    const cars = new Cars(carNamesInput);
    const carNames = cars.getCarNames();
    console.log(carNames);

    const inputCount = await InputView.count();
    const count = new Count(inputCount);
    const counts = count.getCount();
    console.log(counts);

    const carForwards = new Array(carNames.length).fill(0);
    OutputView.printResult();
    this.playRounds(counts, carNames, carForwards);
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
