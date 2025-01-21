// const toUpper = (word) => {
//     return word.toUpperCase();
// };

// const a = (x) => {
//   switch (x) {
//     case 1:
//       console.log("된장국");
//       break;
//     case 2:
//       console.log("김치찌게");
//       break;
//     case 3:
//       console.log("짜파게티");
//       break;
//     case 4:
//       console.log("가자미튀김 요리");
//       break;
//     case 5:
//       console.log("비엔나소시지(병장도 꺠우는) 요리");
//       break;
//     case 6:
//       console.log("라면 요리");
//       break;
//     default:
//         console.log("에러");
//       break;
//   }
// };
// const cook = (x) => {
//   console.log("요리시작");
//   a(x);
//   console.log("요리끝");
// };
// cook(1);

const skill = (skillType) => {
  console.log("스킬 준비");
  skillType();
  console.log("스킬 완료");
};
const fire = () => {
  console.log("불");
};
const ice = () => {
  console.log("얼음");
};
const light = () => {
  console.log("번개");
};
skill(ice);
