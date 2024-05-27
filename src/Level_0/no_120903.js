function solution(s1, s2) {
    return s1.filter(e => {
        if(s2.includes(e)) return e;
    }).length;
}

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];
const result = solution(s1, s2);
console.log(result);