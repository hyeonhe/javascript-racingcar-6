const INPUT_MESSAGE = Object.freeze({
  carNames: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  count: "시도할 횟수는 몇 회인가요?",
});

const ERROR_MESSAGE = Object.freeze({
  carNameError: "[ERROR] 이름은 5자 이하로 적어주세요.",
  numberError: "[ERROR] 숫자가 잘못된 형식입니다.",
});

const RANDOM_NUMBER = Object.freeze({
  minRange: 0,
  maxRange: 9,
  minNumber: 4,
});

export { INPUT_MESSAGE, ERROR_MESSAGE, RANDOM_NUMBER };
