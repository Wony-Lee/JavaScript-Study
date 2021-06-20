// 프로퍼티 정의

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
    value: "yunwon",
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, "lastName", {
    value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);
/*
firstName {
  value: 'yunwon',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본 값이다.
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
/*
lastName {
  value: 'Lee',
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// Enumerable의 값이 false 인 경우
// 해당 프로퍼티는 for ... in 문이나 Object.keys로 열거할 수 없다.
// lastName 프로퍼티는 Enumerable의 값이 false 이므로 열거되지 않는다.
console.log(Object.keys(person));
// [ 'firstName' ]

// Writable 의 값이 false인 경우 해당 프로퍼티의 Value의 값을 변경할 수 없다.
// lastName 프로퍼티는 Writable의 값이 false 이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시 된다.
person.lastName = "kim";
console.log("kim ==> lastName", descriptor);

// Configurable의 값이 false 인 경우 해당 프로퍼티를 삭제할 수 없다.
// lastName 프로퍼티는 Configurable의 값이 false 이므로 값을 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;
console.log("del ==> lastName", descriptor);

// Configurable의 값이 false 인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true});
// Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
/* 
lastName {
  value: 'Lee',
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
/*
fullName {
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
*/

person.fullName = "sewon Lee";
console.log(person);
/* { firstName: 'sewon', fullName: [Getter/Setter] } */
