// 함수
// 자바스크립트에서는 함수를 일급 객체[타입]로 취급함
// array, object, function
// const a = [];
// const b = {};
// const c = function (a, b) {
//   return a + b;
// };

// const subway = {
//   name: "부평역 서브웨이",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale + 1000;
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
// };
// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printSale();

const baskinRabbins = {
  icecream: [
    { name: "민초", price: 2000 },
    { name: "엄외", price: 2500 },
    { name: "봉봉", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (x) {
    if (this.icecream[x] == undefined) {
      console.log("그런번호없음");
    } else {
      console.log(`${this.icecream[x].name}아이스크림이 판매됨 `);
      this.sale += this.icecream[x].price;
    }
  },
  printSale: function () {
    console.log(this.sale);
  },
  addIcecream: function (x, y) {
    this.icecream.push({ name: x, price: y });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(1);
baskinRabbins.sellIcecream(2);
baskinRabbins.sellIcecream(0);
baskinRabbins.printSale();
baskinRabbins.addIcecream("치즈", 3500);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
