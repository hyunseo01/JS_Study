const menu = ["아아", "라떼", "모카"];
const soccer = ["손", "황", "이", "김"];

//배열 연산자

//1, indexing
const test = [menu, soccer];
console.log(test[1][1]);
console.log(test[0][2]);

//2. destructuring 연산자
const test1 = [...menu, ...soccer];
console.log(test1);

//3. rest 연산자
const [son, ...abc] = soccer;
console.log(son); //[0]
console.log(abc); //[1~]

const [son1, abc1] = soccer;
console.log(son1); //[0]
console.log(abc1); //[1]

//4 추가 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬이형";
console.log(soccer);

//5. delete 연산자 삭제
delete soccer[3];
console.log(soccer);
