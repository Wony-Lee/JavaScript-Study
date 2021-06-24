// 가운데 글자 가져오기
function solution(s) {
    let answer = "";
    answer =
        s.length % 2 == 0
            ? s[s.length / 2 - 1] + s[s.length / 2]
            : s[s.length / 2 - 0.5];
    return answer;
}

// 짝수와 홀수
function solution2(num) {
    var answer = "";
    answer = num % 2 == 0 ? "Even" : "Odd";
    return answer;
}

// 이상한 문자 만들기
function solution3(s) {
    return s
        .split(" ")
        .map((item) => {
            let answer = "";
            for (let i = 0; i < item.length; i++) {
                if (i % 2) {
                    answer += item[i].toLowerCase();
                } else {
                    answer += item[i].toUpperCase();
                }
            }
            console.log(answer);
            return answer;
        })
        .join(" ");
}
solution3("try hello world");

// 정수 내림차순 정렬
function solution4(n) {
    let answer = 0;
    answer = n;
    const arr = [];
    const item = answer.toString();
    for (let i = 0; i < item.length; i++) {
        arr.push(item[i]);
    }
    answer = parseInt(arr.sort().reverse().join(""));
    return answer;
}
solution4(118372);
// function solution(n) {
//     let result = n.toString().split("").sort().reverse().join("");
//         return parseInt(result);
//     }

// 자연수 뒤집어 배열로 만들기
function solution5(n) {
    const item = n.toString().split("").reverse();
    const answer = [];
    for (let i = 0; i < item.length; i++) {
        answer[i] = parseInt(item[i]);
    }
    return answer;
}
solution5(12345);

// 제일 작은수 제거
function solution6(arr) {
    const min = Math.min(...arr);
    const index = arr.findIndex((item) => item === min);
    arr.splice(index, 1);

    if (arr.length > 0) {
        return arr;
    }
    return [-1];
}
solution6([4, 3, 2, 1, 1, 2]);
