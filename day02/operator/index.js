//연산자

//사칙연산
const a = 1 + 2;
const a1 = 1 - 2;
const a2 = 2 * 2;
const a3 = 3 / 2;
const a4 = 3 % 2; //1
const a5 = 3 ** 2; //9[2016]

//대입 연산
const b = "";

//비교 연산[boolean 타입으로 귀결됨]
//>,<,>=,<=,==,!=, ===
const c = 5 > 3; //true
const c1 = 5 < 3; //false
const c2 = 5 >= 3; //true
const c3 = 5 <= 3; //false
const c4 = 10 == 9; //false
const c5 = 10 != 9; //true
const c6 = 10 === "10"; //false
const c7 = 10 === 10; //true

//논리
//&&(and), ||(or), !(not)

const d = 5 > 3 && 10 > 5 && 3 > 0;
const d1 = false || false || false || true;
const d2 = !false; //true
const d3 = !(5 <= 3) || !(3 > 10);
const d4 = 5 > 3 || 3 <= 10;

//삼항연산
//조건 ? 값1:값2
const e = 5 > 3 ? "떡" : "순";
const e1 = 5 > 10 ? "마라" : "요거트";

//단항 연산
//+
const f = +"100"; //String -> number

//es6 연산자

//??, ..., ?., #
