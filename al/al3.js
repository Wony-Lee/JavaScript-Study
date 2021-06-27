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
