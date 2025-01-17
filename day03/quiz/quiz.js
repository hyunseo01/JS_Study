const movie = +prompt("1. 액션 2. 로맨스, 3. 공포");
const age = +prompt("나이");
const movietYpe = ["액션", "로매스", "공포"];
const price = [10000, 8000, 9000];
if (age < 13) {
  alert(`${movietYpe[movie - 1]}영화 최종 금액은 ${price[movie - 1] * 0.5}`);
} else if (age >= 60) {
  alert(`${movietYpe[movie - 1]}영화 최종 금액은 ${price[movie - 1] * 0.7}`);
} else if (age < 60 || age >= 13) {
  alert(`${movietYpe[movie - 1]}영화 최종 금액은 ${price[movie - 1]}`);
} else {
  alert("오류");
}

// const bus = +prompt("버스종류 1. 시내버스 2. 광역버스 3. 마을버스");
// const age = +prompt("나이 ");
// const busType = ["시내버스", "광역버스", "마을버스"];
// const pay = [1200, 2000, 1000];
// if (age >= 7 || age <= 65) {
//   (pay[(0, 1, 2)] = 0), 0, 0;
// } else if (age > 8 && age <= 19) {
//   pay[(0, 1, 2)] * 0.7;
// }
// alert(pay[bus - 1] + "원입니다");

// if (bus == 1) {
//   bus = 1200;
// } else if (bus == 2) {
//   bus = 2000;
// } else if (bus == 3) {
//   bus = 1000;
// }

// if (age <= 7 || age >= 60) {
//   alert("무료");
// } else if (age >= 7 && age <= 20) {
//   alert(`${bus * 0.7}원`);
// } else if (age > 20 && age < 65) {
//   alert(bus + "원");
// } else {
//   alert("오류");
// }
