// 프로그래머스 Lv.2
// 숫자 카드 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/135807
function solution(arrayA, arrayB){
    arrayA.sort((a,b)=> a-b);
    arrayB.sort((a,b)=> a-b);
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];

    for(let i = 1; i < arrayA.length; i++){
        gcdA = gcd(gcdA, arrayA[i]);
        gcdB = gcd(gcdB, arrayB[i]);
    }

    let gcdA_ = true;
    let gcdB_ = true;

    for(let i of arrayB){
        if(i % gcdA === 0) gcdA_ = false;
    }

    for(let i of arrayA){
        if(i % gcdB === 0) gcdB_ = false;
    }

    if(gcdA_ && gcdB_) return Math.max(gcdA, gcdB);
    else if(gcdA_) return gcdA;
    else if(gcdB_) return gcdB;
    return 0;
}

function gcd(a, b){
    let max = Math.max(a,b);
    let min = Math.min(a,b);

    while(min > 0){
        let r = max % min;
        max = min;
        min = r;
    }
    return max;
}

const arrayA = [14,35,119];
const arrayB = [18,30,102];

const result = solution(arrayA, arrayB);
console.log(result);