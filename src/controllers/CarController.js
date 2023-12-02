import Cars from "../models/Cars";
import InputView from "../views/InputView";

class CarController {
  async init() {
    const carNamesInput = await InputView.carNames();
    const cars = new Cars(carNamesInput);
    const carNames = cars.getCarNames();
    console.log(carNames);
  }
}

export default CarController;
