// const arr = [1, 3, 5, 7, 9];

// const double = (x) => x * 2;
// const newArr = arr.map(double);
// console.log(newArr);

// const add10 = (x) => x + 10;
// const newArr2 = arr.map(add10);
// console.log(newArr2);

// const square = (x) => (x ** 2 < 10 ? "짜장" : "탕수");
// const newArr3 = arr.map(square);
// console.log(newArr3);

// const fishBread = (x) => (x ** 3 < 100 ? "커피" : "붕어");
// const newArr4 = arr.map(fishBread);
// console.log(newArr4);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];
// const fruitsCheck = (x) => (x.length >= 6 ? x + "💙" : x + "💔");
// const newArr5 = fruits.map(fruitsCheck);
// console.log(newArr5);

// const fruitsCheck2 = (x) => (x.length * 2 < 15 ? x + "짧음" : x + "김");
// const newArr6 = fruits.map(fruitsCheck2);
// console.log(newArr6);

// const arr = [1, 3, 5, 7, 9];

// //요소중에 하나라도 있으면 true 없으면 false
// const three = (x) => x == 3;
// const newArr7 = arr.some(three);
// console.log(newArr7);

// const five = (x) => x < 5;
// const newArr8 = arr.some(five);
// console.log(newArr8);

// const even = (x) => x % 2 == 0;
// const newArr9 = arr.some(even);
// console.log(newArr9);

//every 요소 전체다 가지고 있으면 true 아님 false+

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

//1. 과일이름중에 k b s로 시작하는게 있으면 true 아니면 false
//1. 과일이름중에 길이가 모두 4~12글자 사이면 true 아니면 false
//1. 과일이름중에 i o u가 있으면 💛 아니면 🧨바구기

// const kbs = (x) => x.startsWith("k") || x.startsWith("k") || x.startsWith("k");
// const length4_12 = (x) => x.length <= 12 && x.length >= 4;
// const iou = (x) =>
//   x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "🧨";

// const fArray1 = fruits.some(kbs);
// const fArray2 = fruits.every(length4_12);
// const fArray3 = fruits.map(iou);

// console.log(fArray1);
// console.log(fArray2);
// console.log(fArray3);

const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`;

//song를 배열로 바꾸고, 각각 문자 길이로 바꾼다음 문자 길이가 6글자 넘으면 '💛' 아니면 그대로 나오고 출력하기
// const songArr = song.split(" ");
// const change = (x) => (x.length >= 6 ? "💛" : x);
// const result = songArr.map(change);

const result = song.split(" ").map((x) => (x.length >= 6 ? "💛" : x));
console.log(result);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const over6 = (x) => x >= 6;

numArr.filter((x) => (x ** 2 < 100 ? x + 10 : x));
