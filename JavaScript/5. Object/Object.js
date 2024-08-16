/*
    객체 생성 방법
*/

/* 객체 리터럴 */
var emptyObj = {};
console.log(typeof emptyObj); // object

var person1 = {
	name: 'Lee'
	, gender: 'male'
	, sayHello: function () {
		console.log('Hello World ' + this.name);
	}
};
console.log(person1); // {name: "Lee", gender: "male", sayHello: [Function: sayHello]}


/* Object 생성자 함수 */
var person2 = new Object();
person2.name = 'Lee';
person2.gender = 'male';
person2.sayHello = function () {
	console.log('Hello World ' + this.name);
};
console.log(person2); // {name: "Lee", gender: "male", sayHello: [Function: sayHello]}


/* 생성자 함수 */
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
	this.sayHello = function () {
		console.log('Hello World ' + this.name);
	};
}

var Student = new Person('Lee', 'male');
console.log(Student);



/*
    객체 Property 접근
*/

/* Property Key */
// 표현식을 프로퍼티 키로 사용하려면 키로 사용할 표현식을 대괄호로 묶어야 함
//      -> [first-name]: 'ung-mo'
var sample = {
	'first-name': 'ung-mo'
	, last_name: 'Lee'
	, gender: 'male'
	, 1: 10
	, function: 1 // 가능하긴 하지만 예약어라 사용하지 말아야 함
};


/* Read Property Value */
// 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있음
// 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 읽어야 함 (대괄호([]) 표기법을 사용하는 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 함)

//console.log(sample.first-name); // NaN: undefined-undefined
//console.log(sample[first-name]); // ReferenceError: first is not defined
console.log(sample['first-name']);

console.log(sample.gender);
//console.log(sample[gender]); // ReferenceError: gender is not defined
console.log(sample['gender']);

console.log(sample['1']);
console.log(sample[1]);
//console.log(person.1);    // SyntaxError


/* Property Value 갱신 */
sample['first-name'] = 'kim';
console.log(sample['first-name']);


/* Property 동적 생성 */
sample.age = 20; // 소유하지 않은 Property를 할당
console.log(sample.age);


/* Property 삭제 */
// Object는 삭제할 수 없음, 피연산자는 Property Key 이어야함
delete sample.age;
console.log(sample.age); // undefined


/* for-in 문 */
// 객체의 Property를 순회하기 위해 사용
for (var prop in sample) { // prop에 객체의 프로퍼티 이름이 반환됨 / 단, 순서는 보장되지 않음
	console.log(prop + ': ' + sample[prop]);
}


/* for-of 문 */
const array = [1, 2, 3];
array.name = 'my array';

// 배열의 요소를 순회하기 위해 사용
for (const [index, value] of array.entries()) {
	console.log(index, value);
}

/*
0 1
1 2
2 3
*/



/* Pass-by-Reference */
var refObj = {
	val: 10
}

var ref = refObj;
ref.val = 20; // refObj도 20이 됨



/* Pass-by-Value */
var val1 = 1;
var val2 = val1;
val2 = 10; // val1 = 1



/*
	불변 데이터 패턴
*/

/* object.assign */
// 타킷 객체로 소스 객체의 프로퍼티를 복사
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const merge1 = Object.assign(o1, o2, o3); // { a: 1, b: 2, c: 3 }


const user1 = {
	name: 'Lee',
	address: { // shallow copy 됨
		city: 'Seoul'
	}
}
const user2 = Object.assign({}, user1);
console.log(user2);
user1.name = 'Kim';
user1.address.city = 'Busan';
console.log(user1);
console.log(user2);

console.log(user1.address === user2.address); // true
console.log(user1 === user2); // false


/* object.freeze */
// 불변(immutable) 객체로 만듬
Object.freeze(user1);
user1.name = 'Choi'; // 무시됨
user1.address.city = 'Daegu'; // 변경됨

// Nested Object까지 변경 불가능하게 만들려면 deepfreeze 해야함
function deepFreeze(obj) {
	const props = Object.getOwnPropertyNames(obj);

	props.forEach((name) => {
		const prop = obj[name];
		if (typeof prop === 'object' && prop !== null) {
			deepFreeze(prop);
		}
	});
	return Object.freeze(obj);
}

deepFreeze(user1);
user1.name = 'Choi';            // 무시됨
user1.address.city = 'Incheon'; // 무시됨