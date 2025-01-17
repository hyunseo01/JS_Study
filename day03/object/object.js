// const coffee = {
//   name: "아메리카노",
//   price: 2500,
//   ingredients: ["물", "커피콩", "얼음"],
// };

// console.log(coffee.price);
// console.log(coffee["price"]);

// console.log(coffee.ingredients[1]);
// console.log(coffee["ingredients"][1]);

// const dplus = {
//   top: {
//     palyerName: "siwoo",
//     champion: "Sion",
//     kda: {
//       kill: 1,
//       death: 3,
//       assist: 10,
//     },
//   },
//   ///middle - showmaker, ahri, 927
//   middle: {
//     palyerName: "showmaker",
//     champion: "ahri",
//     kda: {
//       kill: 9,
//       death: 2,
//       assist: 7,
//     },
//   },
// };
// //top + mid kill
// const kill = dplus.top.kda.kill + dplus.middle.kda.kill;
// console.log(kill);

//오브젝트 데이터 추가
const lunch = {
  name: "햄버거",
  brand: "버거킹",
};
const drama = {
  title: "오징어게임",
  grade: 18,
  gemres: ["액션", "블랙코미디", "군상극", "데스게임"],
};

const a = drama.title;
const { title } = drama;

const menu = ["아아", "라떼", "민트"];
const a1 = menu[0];
const [a2] = menu;

const [act, black] = drama.gemres;

const palyer = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};
const coffee1 = {
  coffeeName: "아아",
  price: 2500,
};

//key-vlue 이름이 같으면 생략 가능
const data = { palyer, coffee1: coffee1 };
console.log(data);

const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세리",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};
const { company } = cosmetic;
const { first } = cosmetic.ingredients;
const test1 = { ...cosmetic.ingredients.first };

const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "intel i5",
    ram: "8gb",
    storage: "256gb ssd",
  },
};

const { cpu, ram, storage } = laptop.specs;
console.log(cpu);
console.log(ram);
console.log(storage);
