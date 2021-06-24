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

function solution4(n) {
    let answer = 0;
    answer = n;
    const arr = [];
    const item = answer.toString();
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        arr.push(item[i]);
    }
    answer = parseInt(arr.sort().reverse().join(""));

    console.log(answer);
    return answer;
}
solution4(118372);
