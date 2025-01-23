// const emot = (x) => {
//   return `${x} 피자`;
// };
// console.log(emot("🍕"));

// const wordThree = (x) => {
//   return `${x}${x}${x}`;
// };
// console.log(wordThree("kim"));

// const wonTO$ = (x) => {
//   return `${x * 0.0007} 달러`;
// };
// console.log(wonTO$(100000));

const gotoAcademy = (x) => {
  console.log("집에서 출발");
  x();
  console.log("학원도착");
};

const texi = () => console.log("택시");
const bus = () => console.log("버스");
const walk = () => console.log("걸어감");
const car = () => console.log("차");
gotoAcademy(bus);

const makeBeverage = (x) => {
  console.log("주문 받기");
  x();
  console.log("주문 완료");
};
const coffee = () => {
  console.log("원두갈갈");
  console.log("평탄화");
  console.log("기계");
  console.log("버튼누르기");
  console.log("즙짜기");
};
const smoothie = () => {
  console.log("원두갈갈");
  console.log("평탄화");
  console.log("기계");
  console.log("버튼누르기");
  console.log("즙짜기");
};
const tea = () => {
  console.log("원두갈갈");
  console.log("평탄화");
  console.log("기계");
  console.log("버튼누르기");
  console.log("즙짜기");
};
makeBeverage(tea);
