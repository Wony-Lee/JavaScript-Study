/* 객체 동결 */

const person = { name: "Lee" };

// person 객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(person)); // false

// person 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지.
Object.freeze(person);

// person 은 동결된 객체다.
console.log(Object.isFrozen(person)); // true

// 동결된 객체는 writable, configurable 이 false
console.log(Object.getOwnPropertyDescriptors(person));
/*
name: {
    value: 'Lee',
    writable: false,
    enumerable: true,
    configurable: false
  }
*/

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode 에러
console.log(person);

// 프로퍼티 삭제가 금지
delete person.name; // 무시 strict mode 에러
console.log(person);

// 프로퍼티 값 갱신이 금지
person.name = "kim"; // 무시 strict mode 에러
console.log(person); // name: 'Lee'

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person, 'name', {configurable: true});
// Cannot redefine property: name
