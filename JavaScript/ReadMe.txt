JavaScript (c/c++과 동일한건 기록하지 않음)



※DataType.js 참조※
1. DataType
    1) 원시 타입 (pass-by-value) - 변경 불가능한 값
        - number, string, boolean, null, undefined, symbol(New in ECMAScript 6)
    2) 객체 타입 (pass-by-reference) - 변경 가능한 값
        - object

※Value.js 참조※
2. Value
    - var, let, const keyword 사용, 자료형 가리지 않음

※Operator.js 참조※
3. 연산자
    - 피연산자의 타입은 반드시 일치할 필요가 없음
    1) 산술 연산자
        - var a = 5 * 4;
    2) 문자열 연결 연산자
        - var a = 'a' + 'b';
    3) 할당 연산자
        - var a = 'a';
    4) 비교 연산자
        - var a = '3 > 5; // false
    5) 논리 연산자
        - var a = (5 > 3) && (2 < 4); // true
    6) 타입 연산자
        - var a = typeof 'a'; // string
    7) 인스턴스 생성 연산자
        - var a = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)

4. 제어문
    - c/c++과 동일하므로 기술하지 않음

※TypeCoercion.js 참조※
5. 타입변환
    1) 명시적 타입 변환 (타입 캐스팅)
    2) 암묵적 타입 변환 (타입 강제 변환)
    3) 단축 평가
        - 객체가 null인지 확인하고 프로퍼티를 참조할 때, 함수의 인수(argument)를 초기화할 때 유용하게 사용
        true || anything  -> true
        false || anything -> anything
        true && anything  -> anything
        false && anything -> false

※Object.js 참조※
6. 객체
    - 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합
    1) Property
        - 프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있음
        Ⅰ) Key - 빈 문자열을 포함하는 모든 문자열 or Symbol값
        Ⅱ) Value - 모든 값
    2) Method
        - Property Value가 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부름
    3) 생성방법
        Ⅰ) 객체 리터럴
            - 가장 일반적인 객체 생성 방식
        Ⅱ) Object 생성자 함수
            - new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성
        Ⅲ) 생성자 함수
    4) 객체 Property 접근
        Ⅰ) Key
        Ⅱ) Read Property Value
        Ⅲ) Property Value 갱신
        Ⅳ) Property 동적 생성
        Ⅴ) Property 삭제
        Ⅵ) for-in 문
        Ⅶ) fot-of 문
    5) Pass-by-Reference
        - 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨, 힙 영역(Heap Segment)에 저장
    6) Pass-by-Value
        - 값이 복사되어 전달, 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장

※Function.js 참조※
7. 함수
    - 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록
    1) 정의
        Ⅰ) 함수 선언문
            ⅰ. 함수명
                - 생략 불가능
            ⅱ. 매개변수 목록
                - 0개 이상의 목록으로 괄호로 감싸고 콤마로 분리
            ⅲ. 함수 몸체
                - { }로 문들을 감싸고 return 문으로 결과값을 반환
        Ⅱ) 함수 표현식
            ⅰ. 무명의 리터럴로 표현이 가능
            ⅱ. 변수나 자료구조에 저장 가능
            ⅲ. 함수의 Parameter로 전달 가능
            ⅳ. 반환값으로 사용 가능
        Ⅲ) Function 생성자 함수
    2) 호이스팅
        -  ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅 함
    3) 일급객체 (First-class object)
        - 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미
        - 일급 객체의 조건 (7.함수 -> 1) 정의 -> Ⅱ) 함수 표현식 참조)
    4) Parameter
        Ⅰ) Parameter vs Argument
        Ⅱ) Call-by-Value
            - 원시 타입 인수는 Call-by-Value로 동작
        Ⅲ) Call-by-Reference
            - 객체 타입 인수는 Call-by-Reference 동작
    5) Return Value
        - 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있음
        - 함수는 반환을 생략할 수 있음 (암묵적으로 undefined를 반환함)
    6) 함수 객체의 Property
        Ⅰ) arguments Property
        Ⅱ) caller Property
        Ⅲ) length Property
        Ⅳ) name Property
        Ⅴ) __proto__ 접근자 Property
        Ⅵ) prototype Property
    7) 형태
        Ⅰ) 즉시 실행 함수
        Ⅱ) 내부 함수
        Ⅲ) 재귀 함수
        Ⅳ) CallBack 함수

※TypeCheck.js 참조※
8. TypeCheck
    1) typeof
        - 피연산자의 데이터 타입을 문자열로 반환
    2) Object.prototype.toString
        - 객체를 나타내는 문자열을 반환
    3) instanceof
        - 객체의 상속관계까지 체크
    4) Array.isArray
        - 유사 배열 객체 체크

※ProtoType.js 참조※
9. ProtoType
    - JS는 프로토타입 기반 객체지향 프로그래밍 언어
    1) [[Prototype]] vs prototype Property
        Ⅰ) [[Prototype]]
            - 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯
            - 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킴, 함수 객체의 경우 Function.prototype를 가리킴
        Ⅱ) prototype Property
            - 함수 객체만 가지고 있는 프로퍼티
            - 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가리킴
    2) constructor Property
        - 프로토타입 객체는 constructor Property를 가짐, constructor Property는 객체의 입장에서 자신을 생성한 객체를 가리킴
    3) Prototype chain
        - 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색하는 것
        Ⅰ) 객체 리터럴 방식으로 생성된 객체의 Prototype 체인
            - Prototype 객체: Object.prototype
        Ⅱ) 생성자 함수로 갱성된 객체의 Prototype 체인
            ⅰ. Object() 생성자 함수
                - Prototype 객체: Object.prototype
            ⅱ. 생성자 함수
                - Prototype 객체: 생성자 함수 이름.prototype
    4) Prototype 객체의 확장
    5) 원시타입의 확장
    6) ProtoType 객체의 변경
        Ⅰ) 프로토타입 객체 변경 시점 이전에 생성된 객체
            - 기존 프로토타입 객체를 [[Prototype]]에 바인딩
        Ⅱ) 프로토타입 객체 변경 시점 이후에 생성된 객체
            - 변경된 프로토타입 객체를 [[Prototype]]에 바인딩    

※Scope.js 참조※
10. Scope
    1) 전역 스코프
        - 전역에 변수를 선언함
    2) 지역 스코프
        - 지역에 변수를 선언함
    3) 비 블록 레벨 스코프
        - 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 모두 전역 스코프를 갖게됨
    4) 함수 레벨 스코프
        - 함수 내에 선언할시 지역 변수
    5) 렉시컬 스코프
        - 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정

11. this
    - 해당 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라짐, https://poiemaweb.com/js-this 참조
    1) 함수 호출
        - Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미
    2) 메소드 호출
        - 해당 메소드를 호출한 객체에 바인딩
    3) 생성자 함수 호출
        Ⅰ) 객체 리터럴 방식
        Ⅱ) 생성자 함수 방식
            ⅰ. new 연산자를 붙인 경우
                - 빈 객체 생성 및 this 바인딩 -> this를 통한 프로퍼티 생성 -> 생성된 객체 반환
            ⅱ. new 연산자를 붙이지 않은 경우
                - 전역객체를 가리킴
    4) apply/call/bind 호출


12. closure
    - https://poiemaweb.com/js-closure 참조

13. 정규표현식
    - /regexr/i (/ - 시작, 종료 기호 | regexr - 패턴 | i - 플래그)
    - 필요시 https://poiemaweb.com/js-regexp 참조

14. 고차함수
    - 상태 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있음



<나머지 항목은 poiemaweb의 JavaScript 참조>
Link: https://poiemaweb.com