// 프로그래머스 Level 0
// 숫자 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
    return ("*"+num).indexOf(k+'');
}

console.log(solution(29183,1));