//하샤드 수
function solution(x) {
    let result = 0;
    x.toString()
        .split("")
        .map((a) => {
            result += Number(a);
        });
    return x % result === 0 ? true : false;
}
solution(13);

// 콜라츠 추측
function solution1(num) {
    let answer = 0;
    let count = 0;
    answer = num;
    while (answer > 1) {
        if (answer % 2 === 0) {
            answer = answer / 2;
            count++;
        } else if (!(answer % 2 === 0)) {
            answer = answer * 3 + 1;
            count++;
        }
        if (answer === 1) {
            return count;
        }
        if (count === 500) {
            return (count = -1);
        }
    }
    return count;
}

// 서울에서 김서방 찾기
function solution2(seoul) {
    let answer = "";
    seoul.map((item, index) => {
        if (item === "Kim") {
            answer = `김서방은 ${index}에 있다`;
        }
    });
    return answer;
}
solution2(["Jane", "Kim"]);

// 문자열 내 p와 y의 개수

function solution3(s) {
    let answer = true;
    let pcount = 0;
    let ycount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            pcount++;
        }
        if (s[i] === "y" || s[i] === "Y") {
            ycount++;
        }
    }
    answer = pcount === ycount ? true : false;
    return answer;
}
solution3("pPoooyY");

// 문자열 내림차순으로 배치하기
function solution4(s) {
    return s.split("").sort().reverse().join("");
}
solution4("Zbcdefg");

// 문자열 다루기 기본
function solution5(s) {
    const len = s.length;
    if (len === 4 || len === 6) {
        return s.split("").every((c) => !isNaN(c));
    }
    return false;
}
solution5("a234");
