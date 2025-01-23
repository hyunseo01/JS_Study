const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const lotto = new Array(6).fill(0).map((x) => getRandom(1, 45));
// console.log(lotto);

const getLotto = () => {
  while (true) {
    const lotto = Array(6)
      .fill()
      .map((v) => String(getRandom(1, 45)));
    const newLotto = lotto
      .reduce((a, c) => {
        if (a.includes(c)) {
          return a;
        } else {
          return a + "," + c;
        }
      })
      .split(",");
    if (newLotto.length == 6) {
      return newLotto;
    }
  }
};
console.log(getLotto());
