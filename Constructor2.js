const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    },
};

console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.raduis;
    },
};

console.log(circle2.getDiameter());

/* 객체는 프로퍼티를 통해 객체의 고유의 상태를 표현한다. 그리고 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을
표현한다. 따라서 프로퍼티는 객체마다 프로퍼티 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적이다. */

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const testCircle1 = new Circle(5);
const testCircle2 = new Circle(5);

console.log(testCircle1.getDiameter());
console.log(testCircle2.getDiameter());

// 함수는 다양한 방식으로 호출될 수 있음.
function foo() {
    console.log("==>", this);
}

// 일반 함수 호출
foo(); // window 를 가리킴.
/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: [Getter/Setter],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

const obj = { foo }; // ES6 프로퍼티 축약 표현
obj.foo(); // 메서드로 호출
/* { foo: [Function: foo] } */

// 생성자 호출
const inst = new foo();
/* foo {} */

/* 
생성자 함수는 이름 그대로 객체를 생성하는 함수다.
하지만 자바와 같은 클래스 기반 객체지향 언어의 생성자와는 다르게 그 형식이 정해져 있지 않고,
일반 함수와 동일한 방법으로 생성자 함수를 정의하고
new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.

만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자가 아니라 일반 함수로 동작한다.
*/

// new 연산자와 함께 호출 하지 않으면 생성자 함수로 동작하지 않음.
// 즉, 일반 함수로 호출 됨.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined 를 반환한다.
console.log(circle3);

// 일반 함수로서 호출된 Cricle 내의 this는 전역 객체를 가리킨다.
console.log(radius);
