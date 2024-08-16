/*
    Default Value
*/

function plus(x = 0, y = 0) {
    return x + y;
}



/*
    Rest Parameter
*/

function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3, 4, 5 ]
}
foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest);   // [ 3, 4, 5 ]
}
bar(1, 2, 3, 4, 5);



/*
    Arguments & Rest Parameter
*/

// ES5
function sum() {
    /*
        가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
        유사 배열 객체인 arguments 객체를 배열로 변환한다.
    */
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    });
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// ES6
function sum(...args) {
    console.log(arguments); // Arguments(5)&nbsp;[1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5)); // 15


// 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 rest 파라미터를 사용해야 함
var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty('arguments')); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments')); // false



/*
    Spread
*/

// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 연산자의 피연산자가 될 수 없다.
console.log(...{ a: 1, b: 2 }); // TypeError: Found non-callable @@iterator


/* 함수의 인수로 사용하는 경우 */

// ES5
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

const arr = [1, 2, 3]; // 배열을 분해하여 배열의 각 요소를 파라미터에 전달하려고 한다.
foo.apply(null, arr); // apply 함수의 2번째 인수(배열)는 분해되어 함수 foo의 파라이터에 전달된다.

// ES6
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

const arr = [1, 2, 3]; // 배열을 foo 함수의 인자로 전달하려고 한다.
foo(...arr);
/* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
   spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */


/* 배열에서 사용하는 경우 */
// concat, push, splice, copy는 아래 링크 참조
// https://poiemaweb.com/es6-extended-parameter-handling



/*
    Rest/Spread Property
*/

// Spread 프로퍼티
const n = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

// Rest 프로퍼티
const { x, y, ...z } = n;
console.log(x, y, z); // 1 2 { a: 3, b: 4 }


// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }