// function add(x, y) {
//   return x + y;
// }
// function minus(x, y) {
//   return x - y;
// }
// function hello(x) {
//   const hi = `${x}님 안녕`;
//   return hi;
// }
// function tolength(x) {
//   const length = `${x} : ${x.length}`;
//   return length;
// }
// console.log(hello("bbb"));
// console.log(tolength("aaa"));

// function square_three(x) {
//   return x ** 2 * 3;
// }
// function lunch_menu(x) {
//   return `점심메뉴 : ${x}입니다`;
// }
// function allergy_test(x) {
//   if (x.includes("새우") || x.includes("땅콩") || x.includes("조개")) {
//     return "알러지있음";
//   } else {
//     return "알러지없음";
//   }
// }
// console.log(allergy_test("새우티김"));
// console.log(allergy_test("멸치티김"));

// function threeToArray(x, y, z) {
//   return [x, y, z];
// }
// console.log(threeToArray("고기", "야채", "스프"));

// function getIphone(x, y, z) {
//   const iphone = {
//     version: x,
//     model: y,
//     storage: z,
//   };
//   return iphone;
// }
// console.log(getIphone("13", "plus", "256"));

// function getDeg(x) {
//   if (x == 180 || x == 0) {
//     return "평각";
//   } else if (x < 180 && x > 90) {
//     return "둔각";
//   } else if (x == 90) {
//     return "직각";
//   } else if (x < 90 && x > 0) {
//     return "예각";
//   } else {
//     return "에러";
//   }
// }
// console.log(getDeg(180));
// console.log(getDeg(160));
// console.log(getDeg(90));
// console.log(getDeg(30));
// console.log(getDeg(0));
// console.log(getDeg(-30));

// function alpha(x, y) {
//   return x.split(y)[0].toUpperCase();
// }
// console.log(alpha("americano", "i"));

function word(a) {
  if (a.length <= 10 && a.length >= 4) {
    return "유효";
  } else {
    return "유효하지 아늠";
  }
}
console.log(word("오징어문어쭈꾸미"));
console.log(word("오징어문어쭈꾸미바지락가리비"));
