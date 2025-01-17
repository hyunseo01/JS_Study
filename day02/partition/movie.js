const movieType = +prompt("영화 종류 1. 액션, 2. 로맨스, 3. 공포 >> ");
const age = +prompt("나이 >> ");

switch (movieType) {
  case 1:
    if (age < 13) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 13세 미만 총 금액 ${
          10000 * 0.5
        }원`
      );
    } else if (age <= 60 && age > 13) {
      alert(`선택한 영화 ${movieType}, 나이${age} 성인 총 금액 ${10000}원`);
    } else if (age > 60) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 60세 이상 총 금액 ${
          10000 * 0.7
        }원`
      );
    } else {
      alert("에러");
    }
    break;
  case 2:
    if (age < 13) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 13세 미만 총 금액 ${8000 * 0.5}원`
      );
    } else if (age <= 60 && age > 13) {
      alert(`선택한 영화 ${movieType}, 나이${age} 성인 총 금액 ${8000}원`);
    } else if (age > 60) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 60세 이상 총 금액 ${8000 * 0.7}원`
      );
    } else {
      alert("에러");
    }
    break;
  case 3:
    if (age < 13) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 13세 미만 총 금액 ${9000 * 0.5}원`
      );
    } else if (age <= 60 && age > 13) {
      alert(`선택한 영화 ${movieType}, 나이${age} 성인 총 금액 ${9000}원`);
    } else if (age > 60) {
      alert(
        `선택한 영화 ${movieType}, 나이${age} 60세 이상 총 금액 ${9000 * 0.7}원`
      );
    } else {
      alert("에러");
    }
    break;

  default:
    alert("에러");
    break;
}
