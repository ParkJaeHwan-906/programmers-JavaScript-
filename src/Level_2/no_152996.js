function solution(weights) {
    let answer = 0;
    // console.log(weights.sort((a, b) => a-b));
    weights = weights.sort((a,b)=> a-b);
    let map = new Map();
    for(let i of weights){
        let a = i * 1.0;
        let b = i * 2.0 / 3.0;
        let c = i * 1.0 / 2.0;
        let d = i * 3.0 / 4.0;
        if(map.has(a)){
            answer += map.get(a);
            map.set(a, map.get(a)+1);
        } 
        else{
            map.set(a, 1)
        }
        if(map.has(b)) answer += map.get(b);
        if(map.has(c)) answer += map.get(c);
        if(map.has(d)) answer += map.get(d);
    }
    return answer;
}

const weights = [100, 180, 100, 270, 360];
const result = solution(weights);
console.log(result);