/* 
    <number>
    - 숫자 타입의 값은 배정밀도 64비트 부동소수점 형(-(2^53 - 1) ~ 2^53 -1)을 따름

    3가지 특별한 값들도 표현할 수 있음
        1. Infinity : 양의 무한대
        2. -Infinity : 음의 무한대
        3. NaN : 산술 연산 불가(not-a-number)
*/

var integer = 10;           // 정수
var double = 10.12;         // 실수
var negative = -20;         // 정수
var binary = 0b01000001;    // 2진수
var octal = 0o101;          // 8진수
var hex = 0x41;             // 16진수

var pInf = 10 / 0;
var nInf = 10 / -0;
var nan = 1 * 'string'; // 산술 연산 불가


console.log(integer);
console.log(double);
console.log(negative);
console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary == hex);

console.log(pInf);  // Infinity
console.log(nInf);  // -Infinity
console.log(nan);   // NaN


/* 
    <string>
    - 한 번 문자열이 생성되면, 그 문자열을 변경할 수 없음 (일부 문자도 불가능), 재할당은 가능
*/

var str = "string";
console.log(str);
str = "string A"; // 새로운 문자열 'string A'를 메모리에 생성하고 할당하는것 (즉 'string'이 메모리상에 남아있음)
console.log(str);

for(var i = 0; i < str.length; i++)
{
    console.log(str[i]);
}

str[0] = 'S';
console.log(str); // 변경할수 없음



/* 
    <boolean>
    - 비어있는 문자열, null, undefined, 0은 false로 간주됨
*/

var isVal = true;
var isString = false;

console.log(isVal);
console.log(typeof isVal);
console.log(isString);
console.log(typeof isString);



/*
    undefined
    - 선언 이후 값을 할당하지 않으면 undefined 값을 가짐
*/

var foo;
console.log(foo);



/*
    null
    - 의도적으로 변수에 값이 없다는 것을 명시할때 사용
    - null 타입을 확인할 때 typeof 연산자를 사용하면 안되고 일치 연산자(===)를 사용
*/

var foo = null;
console.log(foo);

// 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환
//var element = document.querySelector('.myElem'); 
//console.log(element);



/*
    symbol
    - 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용
*/

var key = Symbol('key');
console.log(typeof key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);



/*
    object
*/
var person =
{
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};