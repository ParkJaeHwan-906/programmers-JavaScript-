// 프로그래머스 Lv.2 
// 호텔 대실
// https://school.programmers.co.kr/learn/courses/30/lessons/155651?language=javascript

function solution(book_time) {
    let answer = 0;
    for(let i=0; i<book_time.length; i++){
        let start = +(book_time[i][0].replace(":",""));
        let end = +(book_time[i][1].replace(":",""));

        end += 10;

        if(end%100 >= 60) end = (parseInt(end/100)+1)*100 + (end%100)%60;

        book_time[i][0] = start;
        book_time[i][1] = end;
    }
    book_time.sort((e1, e2) => {
        return e1[0] - e2[0];
    })
    let q = [];
    for(let i of book_time){
        if(q.length === 0){
            q.push(i[1]);
            continue;
        }

        if(q[0] <= i[0]){
            q.shift();
            q.push(i[1]);
        }else{
            q.push(i[1]);
        }
        q.sort((e1, e2) => {
            return e1 - e2;
        })
    }
    return q.length; 
}

const book_time = [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]];
const result = solution(book_time);
console.log(result);