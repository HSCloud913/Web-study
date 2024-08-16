/*
    [[Prototype]] vs prototype Property
*/

function Person1(name) { // [[Prototype]] + prototype
    this.name = name;
}

var foo1 = new Person1('Lee'); // [[Prototype]]

console.dir(Person1); // prototype 프로퍼티가 있음
console.dir(foo1);    // prototype 프로퍼티가 없음



/*
    constructor Property
*/

function Person2(name) {
    this.name = name;
}

var foo2 = new Person2('Lee');

console.log(Person2.prototype.constructor === Person); // Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수
console.log(foo.constructor === Person); // foo 객체를 생성한 객체는 Person() 생성자 함수
console.log(Person.constructor === Function); // Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수



/*
    Prototype chain
*/

var student = {
    name: 'Lee'
    , score: 90
}

console.dir(student);
console.log(student.hasOwnProperty('name')); // true
console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true


/* 객체 리터럴 방식으로 생성된 객체의 Prototype 체인 */
var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! my name is ' + this.name);
    }
};

console.dir(person);
console.log(person.__proto__ === Object.prototype);   // true
console.log(Object.prototype.constructor === Object); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true


/* 생성자 함수로 갱성된 객체의 Prototype 체인 */
function Person3(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function () {
        console.log('Hi! my name is ' + this.name);
    };
}

var foo3 = new Person3('Lee', 'male');

console.dir(Person3);
console.dir(foo3);

console.log(foo3.__proto__ === Person3.prototype);              // true
console.log(Person3.prototype.__proto__ === Object.prototype);  // true
console.log(Person3.prototype.constructor === Person);          // true
console.log(Person3.__proto__ === Function.prototype);          // true
console.log(Function.prototype.__proto__ === Object.prototype); // true



/*
    Prototype 객체의 확장
*/

function Person4(name) {
    this.name = name;
}

var foo4 = new Person4('Lee');

Person4.prototype.sayHello = function () {
    console.log('Hi! my name is ' + this.name);
};
foo4.sayHello();



/*
    원시 타입의 확장
*/

var str = 'test';

String.prototype.myMethod = function() {
  return 'myMethod';
}

console.log(str.myMethod());
console.dir(String.prototype);

console.log(str.__proto__ === String.prototype);                 // true
console.log(String.prototype.__proto__  === Object.prototype);   // true
console.log(String.prototype.constructor === String);            // true
console.log(String.__proto__ === Function.prototype);            // true
console.log(Function.prototype.__proto__  === Object.prototype); // true



/*
    ProtoType 객체의 변경
*/

function Person5(name) {
    this.name = name;
}

var foo5 = new Person5('Lee');

// 프로토타입 객체의 변경
Person5.prototype = { gender: 'male' };

var bar = new Person5('Kim');

console.log(foo5.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo5.constructor); // ① Person(name)
console.log(bar.constructor); // ② Object()