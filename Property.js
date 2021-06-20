const o = {};
// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// ==> o.[[Prototype]]
o.__proto__; // ==> Object.prototype

const test = {
    name: "Lee",
};

// 프로퍼티 동적 생성
test.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크럽터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptor(test, "name"));

/*
{
   { value: 'Lee', writable: true, enumerable: true, configurable: true }
   { value: 20, writable: true, enumerable: true, configurable: true }
}
*/

const person = {
    // 데이터 프로퍼티
    firstName: "yunwon",
    lastName: "Lee",

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처 할당
        [this.firstName, this.lastName] = name.split(" ");
    },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName, "/", person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근잪 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출 된다.
person.fullName = "Lee sewon"; // { firstName: "sewon", lastName:"Lee" }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

// firstName 은 데이터 프로퍼티.
// 데이터 프로퍼티는 value, writable, enumerable, configurable
// 프로퍼티 어트리뷰트를 갖는다.

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// { value: 'Lee', writable: true, enumerable: true, configurable: true }

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
/* 
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
*/

/*
    접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트 value)를 가지지 않으며 다만 데이터 프로퍼티의 값을
    읽거나 저장할 때 관여할 뿐이다.

    접근자 프로퍼티는 fullName으로 프로퍼티 값에 접근하면 내부적으로 get 내부 메서드가 호출되어 다음과 같이 동작한다.

    1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다.
    프로퍼티 "fullName"은 문자열이므로 휴효한 프로퍼티 키다.
    2. 프로포타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
    3. 검색된 fullName의 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullName 프로퍼티는 접근자 프로퍼티다.
    4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 get의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.
    프로퍼티 fullName의 프로퍼티 어트리뷰트 get의 값은 Object.getOwnPropertDescriptor 메서드가 반환하는 프로퍼티
    디스크립터 객체의 get 프로퍼티의 값과 같다.
*/

// 일반 객체의 __proto__는 접근자 프로퍼티
const a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
console.log("a ==>", a);
/* {
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
} */

// 함수 객체의 prototype은 데이터 프로퍼티다.
const b = Object.getOwnPropertyDescriptor(function () {}, "prototype");
console.log("b ==>", b);
/* 
{ value: {}, writable: true, enumerable: false, configurable: false }
*/
