// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     kacl: 700,
//     ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
//   },
//   { name: "죽", price: 4000, kacl: 200, ingredients: ["소고기", "밥", "물"] },
//   {
//     name: "샌드위치",
//     price: 13000,
//     kacl: 1000,
//     ingredients: ["고구마", "참지", "빵", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 13000,
//     kacl: 3000,
//     ingredients: ["뼈다귀", "시래기", "감자", "파"],
//   },
// ];
// const priceUp = (x) => {
//   return x.price * 1.1;
// };
// const newMenu = menu.map(priceUp);
// console.log(newMenu);

// const sugarPlus = (x) => {
//   x.kacl += 100;
//   x.ingredients.push("설탕");
//   return x;
// };
// const newMenu2 = menu.map(sugarPlus);
// console.log(newMenu2);

// const noMeetHuman = (x) => {
//   return x.ingredients.every((v) => v !== "햄" && v !== "소고기");
// };
// const newMenu3 = menu.filter(noMeetHuman);
// console.log(newMenu3);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럼"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

//카페인 없는 음료만 콘솔로
// const noCoffee = (x) => x.shots == 0;
// const newMenu4 = starbucks.filter(noCoffee);
// console.log(newMenu4);
//커피콩 들어가면 가격이 20% 할인 들어감
// const coffeeSale = (x) => {
//   x.price = x.ingredients.some((x) => x == "커피콩") ? x.price * 0.8 : x.price;
//   return x;
// };
// const newMenu5 = starbucks.map(coffeeSale);
// console.log(newMenu5);

//성분에 꿀 없으면 꿀 추가 이름을 맨뒤에 꿀하트로 바뀌고 가격 +300 콘솔로
const honey = (x) => {
  if (!x.ingredients.includes("꿀")) {
    x.ingredients.push("꿀");
    x.price += 300;
    x.name += "꿀🤍";
  }
  return x;
};
const newMenu6 = starbucks.map(honey);
console.log(newMenu6);

//String -> Array
const arr = "엄준식".split(" ");
const arr1 = [..."엄준식"];

//Array-> String
["김밥", "천국"].join("");
