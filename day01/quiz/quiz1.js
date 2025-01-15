//1
const name = window.prompt("이름");
const age = window.prompt("나이");
const color = window.prompt("좋아하는 색");
window.alert(`제 이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은${color}`);

//2
const date = window.prompt("날짜");
const work = window.prompt("일정");
window.alert(`오늘은 ${date}, 계획하신 일정은 ${work}입니다`);

//3
const no1 = Number(window.prompt("숫자1"));
const no2 = Number(window.prompt("숫자2"));
window.alert("더하기" + no1 + no2);
window.alert("빼기" + no1 - no2);

//4
const price = Number(window.prompt("음식 가격?"));
const count = Number(window.prompt("몇개?"));
window.alert(price * count);

//5
const tem = Number(window.prompt("섭씨 온도?"));
window.alert((tem * 9) / 5 + 9 / 5);

//6
const width = Number(window.prompt("정사각형 한변의 길이?"));
window.alert(width * width);
