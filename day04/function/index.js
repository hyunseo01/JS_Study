//function[함수]
//마술상자
//입력 :
//출력 :

function plus100(x) {
  return x + 100;
}

//plus100 [함수 이름]
const a = plus100(500);
console.log(a);

//twice

function twice(x) {
  return x * 2;
}

const b = twice(500);
console.log(b);

//luckybiky
function luckybiky(x) {
  return x + "러키비키잖아";
}
const c = luckybiky("ㅁㅁㅁ");
console.log(c);

//홀짝 판별 함수
function check(x) {
  const no = x % 2;
  if (no == 1) {
    return "홀수";
  } else if (no == 0) {
    return "짝수";
  }
}

const num = check(6);
console.log(num);
