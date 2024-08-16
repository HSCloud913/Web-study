/*
    선언
*/

// 매개변수 지정 방법
() => {  }      // 매개변수가 없을 경우
x => {  }       // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => {  }  // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.


// 함수 몸체 지정 방법
x => { return x * x };  // single line block
x => x * x;             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.


() => { return { a: 1 }; };
() => ({ a: 1 });       // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {                 // multi line block.
  const x = 10;
  return x * x;
};



/*
    호출
*/

// ES5
var pow1 = function (x) { return x * x; };
console.log(pow1(10)); // 100

// ES6
const pow2 = x => x * x;
console.log(pow2(10)); // 100


// callback function
// ES5
var arr_cf1 = [1, 2, 3];
var pow_cf1 = arr_cf1.map(function (x) { // x는 요소값
    return x * x;
});
console.log(pow_cf1); // [ 1, 4, 9 ]

// ES6
const arr_cf2 = [1, 2, 3];
const pow_cf2 = arr_cf2.map(x => x * x);
console.log(pow_cf2); // [ 1, 4, 9 ]


