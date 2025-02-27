//date
// const a = new Date();
// console.log(a);

// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getHours());
// console.log(a.getMonth());

const iso = a.toISOString();
const locale = a.toLocaleString();
const date1 = a.toLocaleDateString();
const time1 = a.toLocaleTimeString();
// console.log({ iso, locale, date1, time1 });

const absolute = Math.abs(-10); //절대값
const max = Math.max(3, 123, 255, 329, 120, 310); //최대값
const min = Math.max(3, 123, 255, 329, 120, 310); //최솟값

const ceil = Math.ceil(3.14); //올림
const floor = Math.floor(3.9); //내림
const round = Math.round(3.4); //반올림

const ran = Math.random(); //0<=x<1

const test = Math.floor(Math.random() * 10);

//random 알고리즘
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
