// 프로그래머스 Lv.0
// 배열의 유사도
// https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
    return s1.filter(e => {
        if(s2.includes(e)) return e;
    }).length;
}

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];
const result = solution(s1, s2);
console.log(result);