// 1000 A + B
const add = (a, b) => {
    return console.log("1000 =>", a + b);
};
add(1, 2);

// 1001 A - B
const sub = (a, b) => {
    return console.log("1001 =>", a - b);
};
sub(1, 2);

// 1271 엄청난 부자2
const money = (n, m) => {
    const result = [];
    result[0] = n / m;
    result[1] = n % m;
    result.forEach((item) => console.log("1271 =>", item));
};
money(1000, 100);

// 1550 16진수
const Hex = (n) => {
    let hex = n;
    console.log("1550 =>", parseInt(hex, 16));
};
Hex("F");

// 2338 긴자리 계산
const calculation = (a, b) => {
    const result = [];
    result[0] = a + b;
    result[1] = a - b;
    result[2] = a * b;

    result.forEach((item) => console.log("2338 =>", item));
};
calculation(1, -1);

// 2475 검증수
const check = (n = []) => {
    const mul = n.map((item) => item * item);
    let sum = 0;
    let result = 0;
    mul.forEach((item) => {
        sum += item;
    });
    result = sum % 10;
    console.log("2475 =>", result);
};
check([0, 4, 2, 5, 6]);

// 2557 Hello World
console.log("2557 =>", "Hello World");

// 2558 A+B-2
const add2 = (n = []) => {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        sum += n[i];
    }
    console.log("2558 =>", sum);
};

const party = (n, m, p = []) => {
    const min = 100;
    const result = [];
    console.log(n, m);
    for (let i = 0; i < n; i++) {
        result[i] = n * m;
        if (p[i] < min) {
            result[i] = p[i] - result[i];
        } else if (p[i] > min) {
            result[i] = p[i] - result[i];
        }
    }
    console.log(result);
};
party(5, 20, [99, 101, 1000, 0, 97]);
