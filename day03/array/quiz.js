const fruits = ["딸기", "블루베리", "배", "애플", "바나나"];

//1.
const [sb, bb, ...abc] = fruits;
console.log(sb, abc[0]);
