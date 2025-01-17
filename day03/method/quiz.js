//아이디 물어보고
//아이디 길이가 4~16글자여야하고
//반드시 !,@,#,&중 하나의 특수문자들가야댐
//마지막 글자가 대문자로 끝나야댐
//위 조건 통가하면 아이디 완성 알럿

const id = prompt("아이디 입력 4~16 특수문자 필수 마지막 글자 대문자");
if (
  id.length <= 16 &&
  id.length >= 4 &&
  (id.includes("!") ||
    id.includes("@") ||
    id.includes("#") ||
    id.includes("&")) &&
  id
    .replaceAll("!", "")
    .replaceAll("@", "")
    .replaceAll("#", "")
    .replace("&", "")
    .slice(-1) == id.slice(-1).toUpperCase()
) {
  alert("아이디 완성");
} else {
  alert("아이디 만들기 실패");
}
