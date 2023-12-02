import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constant";

const OutputView = {
  printResult() {
    Console.print(OUTPUT_MESSAGE.result);
  },

  printCarStatus(car, dashed) {
    Console.print(`${car} : ${dashed}`);
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },
};

export default OutputView;
