/*
    Array
*/

// ES5
var arr = [1, 2, 3];
var one   = arr[0];
var two   = arr[1];
var three = arr[2];
console.log(one, two, three); // 1 2 3

// ES6 Destructuring
const arr = [1, 2, 3];
const [one, two, three] = arr; // 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
console.log(one, two, three); // 1 2 39



/*
    Object
*/

// ES5
var obj = { firstName: 'Ungmo', lastName: 'Lee' };
var firstName = obj.firstName;
var lastName  = obj.lastName;
console.log(firstName, lastName); // Ungmo Lee

// ES6 Destructuring
const obj = { firstName: 'Ungmo', lastName: 'Lee' };
const { firstName, lastName } = obj;
console.log(firstName, lastName); // Ungmo Lee