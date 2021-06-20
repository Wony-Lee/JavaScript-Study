/* 스코프 */

let x = "global";

function foo() {
    let x = "local";
    console.log(x);
}
foo();
console.log(x);
/* 변수의 명이 같아도 블록({}) 밖이냐 안이냐에서 스코프가 나뉜다. */

var d = "global";
function boo() {
    console.log(d);
    var d = "local";
}
boo();
console.log(d);

/* var 키워드의 문제 */

var q = 1;
var w = 1;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var가 없는 것처럼 동작.
var q = 100;
// 초기화문이 없는 변수 선언문은 무시함.
var w;

console.log(q);
console.log(w);

var e = 1;
if (true) {
    // e는 전역 변수다. 이미 선언된 전역 변수 e가 있으므로 e 변수는 중복 선언됨.
    // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킴.
    var e = 10;
}
console.log(e);

var i = 10;
// for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언이 가능.
for (var i = 0; i < 5; i++) {}
// 의도치 않게 i 변수의 값이 변경됨
console.log(i); // 5

/* 변수 호이스팅 */
console.log(qoo);
qoo = 123;

console.log(qoo);
var qoo;

/* let 이나 const 키워드로 선언된 변수는 같은 스코프에서 중복 선언을 허용하지 않는다. */
