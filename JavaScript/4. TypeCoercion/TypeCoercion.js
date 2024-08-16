/*
    명시적 타입 변환 (타입 캐스팅)  
*/
var x = 10;
var strX = x.toString();
console.log(typeof str); // string


/* 문자열 타입으로 변환 */
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(String(1));             // "1"
console.log(String(true));          // "true" 
// 2. Object.prototype.toString 메소드를 사용하는 방법
console.log((1).toString());        // "1"
console.log((true).toString());     // "true"
// 3. 문자열 연결 연산자를 이용하는 방법
console.log(1 + '');        // "1"
console.log(true + '');     // "true"


/* 숫자 타입으로 변환 */
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Number('0'));     // 0
console.log(Number(true));    // 1
// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
console.log(parseInt('0'));       // 0
console.log(parseFloat('10.53')); // 10.53
// 3. 문자열 연결 연산자를 이용하는 방법
console.log(+'0');     // 0
console.log(+true);    // 1
// 4. * 산술 연산자를 이용하는 방법
console.log('0' * 1);     // 0
console.log(true * 1);    // 1


/* boolean 타입으로 변환 */
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('x'));       // true
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean({}));        // true
// 2. ! 부정 논리 연산자를 두번 사용하는 방법
console.log(!!'x');       // true
console.log(!!0);         // false
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true



/*
    암묵적 타입 변환 (타입 강제 변환)
*/
var y = 10;
var strY = y + '';
console.log(typeof str, str); // string 10


/* 문자열 타입으로 변환 */
// sample
1 + '2' // "12"
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

// number
0 + ''              // "0"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
-Infinity + ''      // "-Infinity"
// boolean
true + ''           // "true"
false + ''          // "false"
// null
null + ''           // "null"
// undefined
undefined + ''      // "undefined"
// symbol
(Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
// object
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
//(error) [] + ''   // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"



/* 숫자 타입으로 변환 */
// sample
1 - '1'    // 0
1 * '10'   // 10
1 / 'one'  // NaN
'1' > 0   // true

// string
+''             // 0
+'0'            // 0
+'1'            // 1
+'string'       // NaN
// boolean
+true           // 1
+false          // 0
// null
+null           // 0
// undefined
+undefined      // NaN
// symbol
+Symbol()       // TypeError: Cannot convert a Symbol value to a number
// object
+{}             // NaN
+[]             // 0
+[10, 20]       // NaN
+(function(){}) // NaN


/* boolean 타입으로 변환 */
if ('')    console.log('1');
if (true)  console.log('2');
if (0)     console.log('3');
if ('str') console.log('4');
if (null)  console.log('5');
// output: 2 4



/*
    단축 평가
*/

// 논리합(||) 연산자
'Cat' || 'Dog'  // 'Cat'
false || 'Dog'  // 'Dog'
'Cat' || false  // 'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog'  // Dog
false && 'Dog'  // false
'Cat' && false  // false