import CarController from "./controllers/carController";

class App {
  async play() {
    const carController = new CarController();
    await carController.init();
  }
}

export default App;
