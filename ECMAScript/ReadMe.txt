ECMAScript



※Value.js 참조※
1. Value
    1) let
        Ⅰ) 블록 레벨 스코프
            - var과는 다르에 블록 레벨에 변수를 정의하면 무조건 지역변수가 됨
        Ⅱ) 변수 중복 선언 금지
            - 중복선언시 에러 발생
        Ⅲ) 호이스팅
            - 선언 단계와 초기화 단계가 분리되어 진행 -> 즉 호이스팅이 되지않아 먼저 변수를 선언후 호출해야함
        Ⅳ) 클로저
            - var 보다 직관적
        Ⅴ) 전역 객체
            - let 전역 변수는 전역 객체의 프로퍼티가 아니게 됨
    2) const
        - 상수(변하지 않는 값)를 위해 사용
        Ⅰ) 선언과 초기화
            - let은 재할당이 자유로우나 const는 재할당이 금지, 선언과 동시에 초기화 되야함
        Ⅱ) 상수
        Ⅲ) 객체
            -  const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못함 -> 재할당은 불가능하지만 객체의 내용은 변경 가능
    3) Symbol
        Ⅰ) 생성
            - Symbol() 함수로 생성 (생성된 Symbol은 객체가 아니라 변경 불가능한 원시 타입의 값)
        Ⅱ) 사용
            - Symbol 값을 키로 갖는 프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않음

※Template Literals.js 참조※
2. Template Literals
    - 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용됨
    - 문자열 인터폴레이션은 ${ … }으로 표현식을 감쌈

※Arrow Function.js 참조※
3. 화살표 함수
    - 함수 객체의 arguments 프로퍼티가 없음
    1) 선언
    2) 호출
        - 익명함수로만 사용할수 있음 (함수 표현식을 사용해야함)
    3) this
        Ⅰ) 일반함수의 this
            - 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정
        Ⅱ) 화살표 함수의 this
            - 상위 스코프의 this를 가리킴 (call, applay, bind 메소드를 사용하여 this를 변경할 수 없음)
    4) 사용할수 없는 경우
        Ⅰ) 메소드
        Ⅱ) prototype
        Ⅲ) 생성자 함수
        Ⅳ) addEventListener 함수의 콜백 함수

※Parameter.js 참조※
4. Parameter
    1) Default Value
        - c/c++과 동일
    2) Rest Parameter
        - function foo(param, ...rest) {} -> foo(1, 2, 3, 4, 5);
        - 반드시 마지막 파라미터이어야 함
    3) Arguments와 Rest Parameter
        - 인자의 개수를 사전에 알 수 없는 가변 인자 함수의 경우, arguments 객체를 통해 인수를 확인
        - Rest Parameter를 사용하여 가변인자를 함수내부에 배열로 전달
    4) Spread 연산자
        - 피연산자를 개별 요소로 분리, Spread 연산자의 피연산자는 이터러블이어야 함
        - Rest 파라미터는 반드시 마지막 파라미터이어야 하지만 Spread 연산자를 사용한 인수는 자유롭게 사용가능
    5) Rest/Spread Property        

※Destructuring.js 참조※
5. Destructuring
    1) 배열
        - 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당
    2) 객체
        - 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 이름(키)을 사용

※Class.js 참조※
6. Class
    - Link: https://poiemaweb.com/es6-class 참조

※Module.js 참조※
7. Module
    1) Import
    2) Export

※Promise.js 참조※
8. Promise
    - callback의 단점을 보완하기 위해 도입됨
    1) 생성
        - Promise 생성자 함수를 통해 인스턴스화
        Ⅰ) pending
            - 비동기 처리가 아직 수행되지 않은 상태 (resolve or reject 함수가 아직 호출되지 않은 상태)
        Ⅱ) fulfilled
            - 비동기 처리가 수행된 상태 (성공) (resolve 함수가 호출된 상태)
        Ⅲ) rejected
            - 비동기 처리가 수행된 상태 (실패) (reject 함수가 호출된 상태)
        Ⅳ) settled
            - 비동기 처리가 수행된 상태 (성공 or 실패) (resolve or reject 함수가 호출된 상태)
    2) 후속처리 Method
        Ⅰ) then
            - Callback함수 두개를 인자로 전달 받음 (첫번째: 성공시 호출 (fulfilled, resolve), 두번째: 실패시 호출 (rejected, reject))
        Ⅱ) catch
            - 예외가 발생하면 호출됨

※Iteration.js 참조※
9. Iteration
    - 데이터 컬렉션을 순회하기 위한 프로토콜
    1) 이터러블
        - 이터러블 프로토콜을 준수한 객체를 이터러블이라 함
    2) iterator
        - next 메소드를 소유하며 next 메소드를 호출하면 이터러블을 순회하며 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환
    3) built-in 이터러블
    4) Custom 이터러블

※for-of.js 참조※
10. for...of 문
    - 내부적으로 이터레이터의 next 메소드를 호출하여 이터러블을 순회하며 next 메소드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for…of 문의 변수에 할당

※Generator.js 참조※
11. Generator
    - 이터러블을 생성하는 함수