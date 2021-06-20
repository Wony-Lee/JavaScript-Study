// 객체 밀봉
const person = { name: "Lee" };
console.log(Object.isSealed(person));

// person 객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉된 객체다.
console.log(Object.isSealed(person));

// 밀봉된 객체는 configurable이 false
console.log(Object.getOwnPropertyDescriptors(person));
/*
 name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: false
  }
*/

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시 strict mode 에러
console.log(person);

// 프로퍼티 삭제 금지
delete person.name; // 무시 strict mode 에러
console.log(person); // name: 'Lee'

// 프로퍼티 값 갱신 가능
person.name = "kim";
console.log(person); // name: 'kim'

// 프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person, "name", { configurable: true });
// Cannot redefine property: name
