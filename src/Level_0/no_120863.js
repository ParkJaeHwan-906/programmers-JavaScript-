function solution(polynomial) {
    let x_num = 0;
    let num = 0;
    for(let s of polynomial.split("+")){
        let s_copy = s.trim();
        if(s_copy.indexOf("x") > -1){
            s_copy = s_copy.replace(/x/,"");
            x_num += +(!s_copy ? 1 : s_copy);
        }else{
            num += +s_copy;
        }
    }
    return (x_num > 0 ? x_num > 1 ? x_num+"x" : "x" : "") + (num > 0 ? x_num > 0 ? " + "+num : num : "");
}

console.log(solution("3x + 7 + x"));