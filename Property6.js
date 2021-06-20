/* 
객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로
모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드로 호출해야한다.
*/

function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if (target && typeof target === "object" && !Object.isFrozen(target)) {
        Object.freeze(target);
        /*
            모든 프로퍼티를 순회하며 재귀적으로 동결한다.
            Object.keys 메서드는 객제 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
            forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행한다.
        */
        Object.keys(target).forEach((key) => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: "Lee",
    address: {
        city: "Seoul",
    },
};

// 깊은 객체 동결
deepFreeze(person);

console.log(Object.isFrozen(person)); // true
// 중첩 객체까지 동결
console.log(Object.isFrozen(person.address)); // true

person.address.city = "Busan";
console.log(person); // name: 'Lee', address:'Seoul'

const array = { ...person };

console.log(Object.isFrozen(array));

console.log(array);
array.name = "kim";
array.address.city = "Busan";
console.log(array.name);
console.log(array.address);
