// const starbucks = {
//   menu: [
//     { name: "아아", price: 4000 },
//     { name: "라뗴", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sale: 0,
//   sell: function (x) {
//     if (this.menu[x - 1] == undefined) {
//       console.log("그런거없음");
//     } else {
//       this.sale += this.menu[x - 1].price;
//       console.log(`${this.menu[x - 1].name}가 판매됨`);
//     }
//   },
//   printsell: function () {
//     console.log("매출 : " + this.sale);
//   },
//   addmenu: function (x, y) {
//     this.menu.push({ name: x, price: y });
//   },
// };

// starbucks.sell(1);
// starbucks.sell(2);
// starbucks.sell(3);
// starbucks.printsell();
// starbucks.addmenu("민초라떼", 7000);

// const magician = {
//   hp: 100,
//   mana: 100,
//   lv: 1,
//   exp: 0,
//   expcheck: function (exp) {
//     this.exp += exp;
//     if (this.exp >= 100) {
//       this.lv += 1;
//       console.log("레벨업");
//       this.exp = this.exp - 100;
//     }
//   },
//   skillattack: function () {
//     if (this.mana >= 10) {
//       this.mana -= 10;
//       this.expcheck(10);
//       console.log("매직클로 발동");
//     } else {
//       console.log("마나부족");
//     }
//   },
//   skillutil: function () {
//     if (this.mana >= 50) {
//       this.mana -= 50;
//       this.expcheck(50);
//       console.log("텔레포트 발동");
//     } else {
//       console.log("마나부족");
//     }
//   },
//   drink: function () {
//     this.hp += 50;
//     this.mana += 50;
//     console.log("포션마시기");
//   },
//   infoPrint: function () {
//     console.log(
//       `현재체력 : ${this.hp} 현재마나 : ${this.mana} 현제레벨 : ${this.lv} 현재경험치 : ${this.exp}`
//     );
//   },
// };

// magician.skillattack();
// magician.skillutil();
// magician.skillattack();
// magician.skillutil();
// magician.infoPrint();
// magician.drink();
// magician.skillutil();
// magician.infoPrint();

// const youtube = {
//   id: "woo",
//   channel: ["a채널", "b채널", "c채널", "d채널", "e채널", "f채널", "g채널"],
//   subs: [channel[0], channel[2], channel[4]],
//   like: [channel[0], channel[1], channel[5]],
//   subsChannel: function (x) {
//     this.subs.push(this.channel[x - 1]);
//     console.log(`${this.channel[x - 1]}채널이 구독됨`);
//   },
//   likeChannel: function (x) {
//     this.like.push(this.channel[x - 1]);
//     console.log(`${this.channel[x - 1]}좋아요 누른 채널`);
//   },
//   printSubs: function () {
//     console.log(this.subs);
//   },
//   printLike: function () {
//     console.log(this.like);
//   },
// };
// console.log(printSubs());
// console.log(printLike());

// const car = {
//   name: "k5",
//   speed: 0,
//   speedPrint: function () {
//     console.log("현재 속도" + this.speed);
//   },
//   speedUp: function (x) {
//     this.speed += x;
//     console.log(x + "만큼속도 올리기");
//     this.speedPrint();
//   },
//   speedDown: function (x) {
//     if (this.speed == 0) {
//       console.log("속도가 0입니다");
//     } else if (this.speed - x < 0) {
//       console.log("속도가 0밑으로 안내려감");
//       this.speed = 0;
//     } else {
//       this.speed -= x;
//       console.log(x + "만큼 속도 내리기");
//       this.speedPrint();
//     }
//   },
//   break: function (x) {
//     console.log("브레이크");
//     this.speedDown(x);
//   },
// };

// console.log(car.speedUp(50));
// console.log(car.break(30));
// console.log(car.speedUp(30));
// console.log(car.speedUp(20));

const calculator = {
  result: 0,
  resultInput: function (x) {
    this.result = x;
  },
  history: [],
  add: function (x) {
    let save = `${this.result} + ${x} = ${this.result + x}`;
    console.log(save);
    this.history.push(save);
  },
  minus: function (x) {
    let save = `${this.result} - ${x} = ${this.result + x}`;
    console.log(save);
    this.history.push(save);
  },
  multiple: function (x) {
    let save = `${this.result} * ${x} = ${this.result + x}`;
    console.log(save);
    this.history.push(save);
  },
  divide: function (x) {
    if (x != 0) {
      let save = `${this.result} / ${x} = ${this.result + x}`;
      console.log(save);
      this.history.push(save);
    } else {
      console.log("오류에러버그");
    }
  },
  square: function (x) {
    let save = `${this.result} ** ${x} = ${this.result + x}`;
    console.log(save);
    this.history.push(save);
  },
  clear: function () {
    this.result = 0;
    console.log("result가 0으로 초기화됨");
  },
  showHistory: function () {
    console.log(this.history);
  },
};

calculator.resultInput(10);
calculator.add(10);
calculator.minus(5);
calculator.multiple(3);
calculator.divide(2);
calculator.square(3);
calculator.clear();
calculator.showHistory();
