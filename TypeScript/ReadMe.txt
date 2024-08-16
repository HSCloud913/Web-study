TypeScript



1. Typing
    - 변수명 뒤에 타입을 명시하는 것으로 타입을 선언
    1) 정적 타이핑
        - 타입이 결정된 이후에는 변경할 수 없음
    2) 타입 추론
        - 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정
        - 타입을 추론할 수 없으면 any 타입이 됨 (any타입은 재할당 가능)

2. Class
    - Typescript 클래스는 클래스 몸체에 클래스 프로퍼티를 사전 선언하여야 함
    1) 접근 제한자
        - c/c++과 동일
    2) 생성자 Paramenter에 접근 제한자 부여
        - 암묵적으로 클래스 프로퍼티로 선언되고 생성자 내부에서 별도의 초기화가 없어도 암묵적으로 초기화가 수행됨
    3) readonly keyword
        - 생성자 내부에서만 값을 할당할 수 있음, 주로 상수의 선언에 사용
    4) static keyword
        - 클래스 프로퍼티에도 사용할 수 있음
    5) 추상 클래스
        - abstract 키워드를 사용, 상속만을 위해 사용됨

3. Interface
    - 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사함
    1) Value
    2) Function
    3) Class
        - implements keyword 사용
    4) Duck Typing
    5) 선택적 Property

4. Generic
    - Template과 매우 유사
    - 클래스, 함수에 적용가능