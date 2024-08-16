/*
    함수 정의
*/

/* 함수 선언문 */
// 로딩되는 시점에 바로 초기화하고 이를 VO(variable object)에 저장
function square(number) {
    return number * number;
}


/* 함수 표현식 */
// 로딩 시점에 변수 객체(VO)에 함수를 할당하지 않고 runtime에 해석되고 실행
var square1 = function(number) {
    return number * number;
};

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
};
console.log(foo(10, 10));

// 익명 함수 표현식(anonymous function expression)
var bar = function(a, b) {
    return a * b;
};
console.log(bar(10, 10));


/* Function 생성자 함수 */
var square2 = new Function('number', 'return number * number');
console.log(square(10)); // 100



/*
    Hoisting
*/
var res = square_hoisting1(5); // 가능

function square_hoisting1(number) { // 함수 선언문 (함수 선언, 초기화, 할당이 한번에 이루어짐)
  return number * number;
}


// TypeError: square is not a function
var res = square_hoisting2(5); // 불가능

var square_hoisting2 = function(number) { // 함수 표현식 (함수 호이스팅이 아니라 변수 호이스팅이 발생)
  return number * number;
}


/*
    일급 객체
*/
// 무명의 리터럴로 표현이 가능하다.
// 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
    return --num;
};

var predicates = { increase, decrease };


// 함수의 매개변수에 전달할 수 있다.
// 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    var num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase);
var decreaser = makeCounter(predicates.decrease);



/*
    Parameter
*/

/* Parameter vs Argument */
// 인수를 전달하지 않으면 매개변수는 undefined로 초기화 됨
var func = function (p1, p2) {
    console.log(p1, p2);
};

func(1); // 1 undefined


/* Call-by-Value */
function cbv(primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;
console.log(foo(x)); // 1


/* Call-by-Reference */
function cbf(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num = 100;
var obj = {
    name: 'Lee',
    gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

cbf(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}



/*
    Return Value
*/
function calculateArea(width, height) {
    var area = width * height;
    return area; // 단일 값의 반환
}

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume]; // 복수 값의 반환
}



/*
    함수 객체의 Property
*/

/* arguments Property */
// 함수 호출 시 전달된 argument들의 정보를 담고 있는 순회가능한 유사 배열 객체이며 함수 내부에서 지역변수처럼 사용 -> 함수 외부에서 사용 불가능
function argu_test(x, y) {
    console.log(arguments);
    return x * y;
}
argu_test(1); // { '0': 1 }

// arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용
function sum() {
    var res = 0;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}
console.log(sum(1, 2, 3)); // 6


/* caller Property */
// 자신을 호출한 함수를 의미
function foo_caller(func) {
    var res = func();
    return res;
}

function bar_caller() {
    return 'caller : ' + bar_caller.caller;
}
console.log(foo_caller(bar_caller)); // function foo_caller(func) {...}


/* length Property */
// 함수 정의 시 작성된 매개변수 갯수를 의미
function bar_length(x) {
    return x;
}
console.log(bar_length.length); // 1


/* name Property */
// 함수명을 나타냄. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 가짐
var namedFunc = function multiply(a, b) {
    return a * b;
};
// 익명 함수 표현식(anonymous function expression)
var anonymousFunc = function (a, b) {
    return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''


/* __proto__ 접근자 Property */
// [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 Property

// __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입 객체에 접근할 수 있다.
console.log({}.__proto__ === Object.prototype);


/* prototype Property */
// prototype 프로퍼티는 함수 객체만이 소유하는 Property
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype')); // {value: {…}, writable: true, enumerable: false, configurable: false}



/*
    함수의 다양한 형태
*/

/* 즉시 실행 함수 */
// 함수선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가됨

// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
}()); // => };();

// 익명 즉시 실행 함수(immediately-invoked function expression)
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}()); // => };();
  

/* 내부 함수 */
// 함수 내부에 정의된 함수, 부모함수의 외부에서 접근할 수 없음
function parent(param) {
    var parentVar = param;
 
    function child() {
      var childVar = 'lee';
      console.log(parentVar + ' ' + childVar); // Hello lee
    }
}


/* 재귀 함수 */
// 자기 자신을 호출하는 함수
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


/* CallBack 함수 */
// 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수
var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    console.log('button clicked!');
});