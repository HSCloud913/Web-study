SASS/SCSS



CSS의 한계와 단점을 보완하여 보다 가독성이 높고 코드의 재사용에 유리한 CSS를 생성하기 위한 CSS의 확장


node-sass
-> node-sass [option] <Input File Path or Dir> <Output File Path or Dir>
※ Output File Path or Dir 앞에 Output을 붙이면 Dir을 생성한뒤 하위 Dir에 생성, Dir로 설정할 경우 Dir에 있는 모든 scss파일이 css로 컴파일됨

option list
    -w, --watch                Watch a directory or file
    -r, --recursive            Recursively watch directories or files
    -o, --output               Output directory
    -x, --omit-source-map-url  Omit source map URL comment from output
    -i, --indented-syntax      Treat data from stdin as sass code (versus scss)
    -q, --quiet                Suppress log output except on error
    -v, --version              Prints version info
    --output-style             CSS output style (nested | expanded | compact | compressed)

SASS vs SCSS
불필요   필요    - 중괄호 {}	
불필요   필요    - 세미콜론 ;
필요    불필요   - : 뒤의 공백
 =     @mixin   - Mixin
 +     @include - Include
확장자	.scss	.sass	.css


개인적으로 SCSS가 더 친숙하고 가독성이 높아 SCSS 사용 


Script
1. Data Type
    1) number
    2) string
    3) color
    4) boolean
    5) null (Property값에 null인 변수가 지정되면 해당 룰셋은 출력되지 않음)
    6) list
    7) map

2. Valuable
    - 변수명은 $으로 시작

3. Scope
    - 전역에 선언한 변수: 전역변수, 블록내에 선언한 변수: 지역변수, 지역변수에 '!global'을 뒤에 붙이면 전역변수가 됨

4. Operation - https://poiemaweb.com/sass-built-in-function#4-list-functions 참조
    1) number
    2) color
    3) string
    4) bool
    5) list
5. function
6. Interpolation: #{} - 변수의 값을 문자열 그대로 삽입, 삽입된 문자열은 연산의 대상으로 취급되지 않음
7. Ampersand(&) - 부모요소를 참조하는 셀렉터 (a {color: #ccc &.home {color: #fof} } == a.home {color: #fof})
8. !default - 할당되지 않은 변수의 초기값을 설정 (할당된 변수에 설정하면 적용되지 않음)
9. Nestring - 선언을 중첩하는 것 (#navbar {width:80%; height: 23px; ul {list-style-type: none;} li {float: left; a {font-weight: bold;}}} )
            - 부모요소의 참조가 필요한 경우 &을 사용

Sass 기본 내장 함수 - https://poiemaweb.com/sass-built-in-function#4-list-functions 참조


@-Rules and Directives
    1) @import - css 파일을 분리해서 사용하기 위함 (분할된 파일은 Partial이라고 하며 파일명 앞에 _을 붙임)
    2) @extend - 기존 스타일을 상속하고자 하는경우 사용 (@media 블록과 같이 사용하지 못함)
    3) Placeholder Selectors - 재이용이 가능한 rule set을 % 키워드로 지정하는 @extend 전용 Selector


if - c/c++과 동일
@if - 조건분기가 가능
@for - c/c++과 동일 (for-through)
@each - @each, list, map의 요소에 반복 실시
@while - c/c++과 동일
Mixin - 중복기술을 방지하기 위해 사용 빈도가 높은 마크업을 사전에 정의하여 필요할때 사용하는 방법, argument를 받을 수 있음
Function - Mixin과 유사하나 리턴값에 차이가 있음, @return directive로 리턴



※코드는 style.scss 참조※