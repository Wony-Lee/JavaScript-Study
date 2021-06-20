/* 변수 선언과 값의 할당 */
let value = 80;
console.log(80);

/* 
a = 50;
let a;
스코프에 의한 컴파일 에러
*/

/* 정상출력 
이유 : 호이스팅에 의한 선언이 먼저 끌어올려진 상태이기때문에
*/
a = 50;
var a;
console.log(a);
