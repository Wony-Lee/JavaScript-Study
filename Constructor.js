/* Object 생성자 함수 */

const person = new Object();

person.name = "Lee";
person.sayHello = function () {
    console.log("HI My name is " + this.name);
};
console.log(person);

person.sayHello();

/* 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
생성자 함수에 의해 생성된 객체를 인스턴스라 한다. 
자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의
빌트인(built-in) 생성자 함수를 제공한다.
*/

// 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee");
console.log(typeof strObj);
console.log(strObj);

// 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1);
console.log(typeof numObj);
console.log(numObj);

// 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

// 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function("x", "return x * x");
console.log(typeof func);
console.log(func);

// 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// 생성자 함수에 의한 RegExp 객체 생성(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof data);
console.log(date);

/* 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다.
객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.
Object 생성자 함수를 사용해 객체를 생성하는 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.
*/
