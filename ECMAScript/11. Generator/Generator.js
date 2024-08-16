/*
    정의
*/

// 제너레이터 함수 선언문
function* genDecFunc() {
    yield 1;
}
let generatorObj = genDecFunc();

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1;
};
generatorObj = genExpFunc();

// 제너레이터 메소드
const obj = {
    * generatorObjMethod() {
        yield 1;
    }
};
generatorObj = obj.generatorObjMethod();

// 제너레이터 클래스 메소드
class MyClass {
    * generatorClsMethod() {
        yield 1;
    }
}
const myClass = new MyClass();
generatorObj = myClass.generatorClsMethod();



// 제너레이터 함수 정의
function* counter() {
    console.log('Point 1');
    yield 1;                // 첫번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 2');
    yield 2;                // 두번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 3');
    yield 3;                // 세번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 4'); // 네번째 next 메소드 호출 시 여기까지 실행된다.
}
const generatorObj = counter();

// 첫번째 next 메소드 호출: 첫번째 yield 문까지 실행되고 일시 중단된다.
console.log(generatorObj.next()); // Point 1 // {value: 1, done: false}
// 두번째 next 메소드 호출: 두번째 yield 문까지 실행되고 일시 중단된다.
console.log(generatorObj.next()); // Point 2 // {value: 2, done: false}
// 세번째 next 메소드 호출: 세번째 yield 문까지 실행되고 일시 중단된다.
console.log(generatorObj.next()); // Point 3 // {value: 3, done: false}
// 네번째 next 메소드 호출: 제너레이터 함수 내의 모든 yield 문이 실행되면 done 프로퍼티 값은 true가 된다.
console.log(generatorObj.next());



/*
    제너레이터의 활용
    - 이터러블의 구현
    - 비동기식 처리

    Link: https://poiemaweb.com/es6-generator
*/