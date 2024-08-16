/*
    변수의 선언

    1. 선언 단계(Declaration phase)
        - 변수 객체(Variable Object)에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
    2. 초기화 단계(Initialization phase)
        - 변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.
    3. 할당 단계(Assignment phase)
        - undefined로 초기화된 변수에 실제값을 할당한다.
*/

var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;



/*
    변수의 중복 선언
    - 문법적으로 허용되지만 사용하지 않는 것이 좋음
*/

var x = 1;
console.log(x); // 1

var x = 100;
console.log(x); // 100



/*
    암묵적 전역 변수
    - var 키워드의 생략은 문법적으로 허용되지만 의도하지 않게 변수를 전역화할 수 있으므로 사용하지 않는 것이 좋음
*/

a = 1;
console.log(a); // 1



/*
    동적 타이핑
    - 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정됨
*/

var foo;
console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean



/*
    변수 호이스팅
    - 변수 선언보다 참조를 먼저해도 변수선언구문이 호이스팅되어 참조 앞에 놓여짐
*/

console.log(foot); // ① undefined
var foot = 123; // hoisting

console.log(foot); // ② 123
{
    var foo = 456;
}

console.log(foot); // ③ 456



/*
    var 키워드로 선언된 변수의 문제점

    1. 함수 레벨 스코프(Function-level scope)
        - 전역 변수의 남발
        - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
    2. var 키워드 생략 허용
        - 의도하지 않은 변수의 전역화
    3. 중복 선언 허용
        - 의도하지 않은 변수값 변경
    4. 변수 호이스팅
        - 변수를 선언하기 전에 참조가 가능하다.
*/