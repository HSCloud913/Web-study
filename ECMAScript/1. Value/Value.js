/*
    let
*/

/* block-level scope */
let global = 123; // Global
{
    let local = 456; // Local
}

/* 변수 중복 선언 금지 */
let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared

/* Hoisting */
console.log(bar_hoisting); // Error: Uncaught ReferenceError: bar_hoisting is not defined
let bar_hoisting;


let foo = 1; // Gloal
{
    console.log(foo); // ReferenceError: foo is not defined
    let foo = 2; // Local

    /*
        ES6의 let으로 선언된 변수는 블록 레벨 스코프를 가지므로 코드 블록 내에서 선언된
        변수 foo는 지역 변수이다. 따라서 지역 변수 foo도 해당 스코프에서 호이스팅되고
        코드 블록의 선두부터 초기화가 이루어지는 지점까지 일시적 사각지대(TDZ)에 빠진다.
        따라서 전역 변수 foo의 값이 출력되지 않고 참조 에러(ReferenceError)가 발생
    */
}

/* 클로저 */
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 for 루프의 코드 블록에서만 유효한 지역 변수이면서 자유 변수이다.
for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); }); // 클로저
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  console.dir(funcs[j]);
  funcs[j]();
}

/* 전역 객체 */
let globalObj = 123;
console.log(window.globalObj); // undefined



/*
    const
*/

/* 선언과 초기화 */
const FOO = 123;
FOO = 456; // TypeError: Assignment to constant variable.

const FOO2; // SyntaxError: Missing initializer in const declaration

{
    const FOO3 = 10;
    console.log(FOO3); //10
}
console.log(FOO3); // ReferenceError: FOO3 is not defined

/* 상수 */
const MAXROW = 10;
const MAXCOL = 20;

/* 객체 */
const user = { name: 'Lee' };
user = {}; // TypeError: Assignment to constant variable.
user.name = 'Kim'; // OK
console.log(user); // { name: 'Kim' }



/*
    Symbol
    - new 연산자를 사용하지 않음, 문자열을 인자로 전달할 수 있음
*/

let mySymbol = Symbol(); // 심볼 mySymbol은 이름의 충돌 위험이 없는 유일한 프로퍼티 키



const obj = {};
const mySymbol2 = Symbol('mySymbol');
obj[mySymbol2] = 123;

console.log(obj); // { [Symbol(mySymbol)]: 123 }
console.log(obj[mySymbol2]); // 123


/* Symbol.iterator */
/*
Array
Array.prototype[Symbol.iterator]

String
String.prototype[Symbol.iterator]

Map
Map.prototype[Symbol.iterator]

Set
Set.prototype[Symbol.iterator]

DOM data structures
NodeList.prototype[Symbol.iterator] HTMLCollection.prototype[Symbol.iterator]

arguments
arguments[Symbol.iterator]
*/