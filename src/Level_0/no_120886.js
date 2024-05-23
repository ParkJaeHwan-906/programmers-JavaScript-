// 프로그래머스 Lv.0
// A로 B 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120886
const solution = (before, after) => {
    let arr1 = ((before.split("")).sort()).join("");
    let arr2 = ((after.split("")).sort()).join("");
    return arr1 == arr2 ? 1 : 0;
}

console.log(solution("hello", "eollh"));