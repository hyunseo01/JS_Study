const mbti = prompt("mbti >>");
const i = "내향적";
const e = "외향적";
const s = "감각적";
const n = "직관적";
const t = "사고적";
const f = "감정적";
const j = "계획적";
const p = "즉흥적";
let result = ["m", "b", "t", "i"];
if (mbti[0] == "i") {
  result[0] = i;
} else {
  result[0] = e;
}

if (mbti[1] == "s") {
  result[1] = s;
} else {
  result[1] = n;
}

if (mbti[2] == "t") {
  result[2] = t;
} else {
  result[2] = f;
}

if (mbti[3] == "j") {
  result[3] = j;
} else {
  result[3] = p;
}
alert(result + "이시군요");
