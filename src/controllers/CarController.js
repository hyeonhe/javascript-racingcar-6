import Cars from "../models/Cars";
import Count from "../models/Count";
import InputView from "../views/InputView";

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
  }
}

export default CarController;
