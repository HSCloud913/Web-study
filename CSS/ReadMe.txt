CSS



HTML없이 단독으로 존재하는 CSS는 의미가 없음


1. Reset CSS 사용
    - 모든 웹 브라우저는 디폴트 스타일을 가지고 있어 CSS가 없어도 작동함, but 웹브라우저에 따라 디폴트 스타일이 상이하고 지원하는 tag나 style도 제각각이어서 주의가 필요함
    - 기본적인 HTML요소의 CSS를 초기화하는 용도로 사용
    
    - 자주사용되는 Reset CSS
        1. Eric Meyer's reset: https://meyerweb.com/eric/tools/css/reset/
        2. normalize.css: https://necolas.github.io/normalize.css/


※Selector.html 참조※
2. 셀렉터 (Selector) - 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단, 복수의 셀렉터를 연속하여 지정가능히며 ','로 구분
    1) Universal Selector - HTML 문서 내의 모든요소를 선택
    2) Type Selector (태그 셀렉터) - 지정된 태그명이 가지는 요소를 선택
    3) ID Selector - id Attribute 값을 지정하여 일치하는 요소를 선택, 중복될 수 없는 유일한 값
    4) Class Selector - class Attribute 값을 지정하여 일치하는 요소를 선택, 중복될 수 있음, 공백으로 구분하여 여러 개 지정가능
    5) Attribute Selector - 지정된 Attribute를 갖는 모든 요소를 선택
    6) Combinator (복합 셀렉터)
        Ⅰ) Descendant Combinator (후손 셀렉터)
        Ⅱ) Child Combinator (자식 셀렉터)
        Ⅲ) Sibling Combinator (형제 셀렉터)
            ⅰ. Adjacent Sibling Combinator (인접 형제 셀렉터)
            ⅱ. General Sibling Combinator (일반 형제 셀렉터)
    7) Pseudo-Class Selector (가상 클래스 셀렉터)
        Ⅰ) Link pseudo-classes (링크 셀렉터), User action pseudo-classes
        Ⅱ) UI element states pseudo-classes (UI 요소 상태 셀렉터)
        Ⅲ) Structural pseudo-classes (구조 가상 클래스 셀렉터)
        Ⅳ) Negation pseudo-class (부정 셀렉터)
        Ⅴ) Validity pseudo-class (정합성 체크 셀렉터)
    8) Pseudo-Element Selector (가상 요소 셀렉터)


※Unit.html 참조※
3. 프로퍼티 (Property) - {} 내에 프로퍼티와 값을 지정하는것, 프로퍼티는 표준 스펙으로 이미 지정되어 있는 것을 사용해야함, ;로 구분
    1) Keyword - Property값으로 사용할 수 있는 키워드가 정해져 있음 (검색 ㄱ)
    2) 크기 단위
        Ⅰ) px - 요소의 크기나 이미지의 크기지정에 주로 사용 (대부분의 브라우저는 1px을 1/96 인치의 절대단위로 인식)
        Ⅱ) % - 요소에 지정된 사이즈에 상대적인 사이즈를 설정
        Ⅲ) em - 요소에 지정된 사이즈에 상대적인 사이즈를 설정
        Ⅳ) rem - rem은 최상위 요소(html)의 사이즈를 기준으로 설정
        Ⅴ) Viewport 단위
            ⅰ. vh - viewport 높이의 1/100
            ⅱ. vw - viewport 너비의 1/100
            ⅲ. vmin - viwport 너비 또는 높이 중 작은 쪽의 1/100
            ⅳ. vmax - viwport 너비 또는 높이 중 큰 쪽의 1/100
    3) 색상 표현 단위 - 자세한 색상은 https://poiemaweb.com/css3-units 최하단 참고
        Ⅰ) HEX - #000000
        Ⅱ) RGB - rgb(255, 255, 0)
        Ⅲ) RGBA - rgba(255, 255, 0, 1.0)
        Ⅳ) HSL(색상/채도/명도) - hsl(0, 100%m 25%)
        Ⅴ) HSLA - hsla(0, 100%m 25%, 1.0)


※BoxModel.html 참조 (예제에 상세설명 첨부) ※
4. Box Model - 모든 HTML 요소는 Box 형태의 영역을 가지고 있음 (Box Model.png 참조)
    1) Content - 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역 (Property: width, height)
    2) Padding - Border 안쪽에 위치하는 요소의 내부 여백 영역, Property값은 패딩영역의 두께를 의미, 기본색은 투명, 요소에 적용된 배경의 Color, Img는 패딩 영역까지 적용됨
    3) Border - 테두리 영역으로 Property값은 테두리의 두께를 의미
    4) Margin - Border 바깥에 위치하는 요소의 외부 여백 영역, Property값은 마진 영역의 두께를 의미, 배경색 지정 불가능 (기본색 투명)


※Property.html 참조※
5. display, visibility, opacity Property
    1) display - 상속되지 않음
        Ⅰ) block - block특성을 가지는 요소(block 레벨 요소)로 지정
            ⅰ. 특징
                a. 항상 새로운 라인에서 시작
                b. 화면크기 전체의 가로폭을 차지 (width: 100%)
                c. width, height, margin, padding 지정 가능
                d. block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있음
            ⅱ. 목록: div, h1~h6, p, ol, ul, li, hr, table, form
        Ⅱ) inline - inline특성을 가지는 요소(inline 레벨 요소)로 지정
            ⅰ. 특징
                a. 새로운 라인에서 시작하지 않음, 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치
                b. content 너비만큼 가로폭 차지
                c. width, height, margin, padding 지정 불가, 상-하 여백은 line-height로 지정
                d. inline 레벨 요소 뒤에 공백(Enter, Space)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정됨
                e. inline 레벨 요소 내에 block요소 포함 불가, 일반적으로 block 레벨 요소에 포함되어 사용
            ⅱ. 목록: span, a, strong, img, br, input, select, textarea, button
        Ⅲ) inline-block - inline-block특성을 가지는 요소(inline-block 레벨 요소)로 지정
            ⅰ. 특징
                a. block과 inline 레벨 요소의 특징을 모두 가짐
                b. 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치시킬 수 있음
                c. width, height, margin, padding 지정 가능, 상-하 여백은 margin과 line-height 두가지 모두 가능함
                d. content 너비만큼 가로폭 차지
                e. inline 레벨 요소 뒤에 공백(Enter, Space)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정됨
            ⅱ. 목록: span, a, strong, img, br, input, select, textarea, button
        Ⅳ) none - 해당 요소를 화면에 표시하지 않음 (공간까지 사라지게 함)
    2) visibility
        Ⅰ) visible - 해당 요소를 보이게 한다 (default)
        Ⅱ) hidden - 보이지 않게 한다. (공간은 사라지지 않고 남아있게 됨)
        Ⅲ) collapse - table 요소에 사용하며 행이나 열을 보이지 않게 함
        Ⅳ) none - table 요소의 row나 column을 보이지 않게 함 / IE, FireFox에서만 동작함. / Chrome에서는 hidden과 동일
    3) opacity
        - 요소의 투명도를 정의함 (0.0 ~ 1.0)


※Background.html 참조※
6. Background
    1) background-image
        - 이미지 지정
    2) background-repeat
        - 배경 이미지의 반복을 설정 | 수직, 수평 또는 수직과 수평 모두 반복 지정 가능함 (기본값)
    3) background-size
        - 배경 이미지의 사이즈 지정(고유 비율은 유지됨)| px, %, cover, contain 등 사용
            Ⅰ) px - 첫번째 값은 width, 두번째 값은 height
            Ⅱ) % - 첫번째 값은 width, 두번째 값은 height
            Ⅲ) cover - 비율을 유지한 상태에서 부모 요소의 width, height 중 큰값에 배경이미지를 맞춤
            Ⅳ) contain - 비율을 유지한 상태에서 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 크기를 조정
    4) background-attachment
        - 화면이 스크롤되더라도 배경이미지는 스크롤되지 않고 고정되어 있게 할 수 있음 (fixed keyword)
    5) background-position
        - default value (0%, 0%), 이미지의 좌표를 지정함 (left, top, right, bottom, center ...)
    6) background-color
        - 배경 색상 지정, 색상값 또는 transparent 키워드 지정 가능
    7) background Shorthand
        - background: color || image || repeat || attachment || position


※Font_Text.html 참조※
7. Font & Text
    Font
    1) font-size
        - 폰트(텍스트) 크기 지정
    2) font-family
        - 폰트를 지정 (여러개 지정시 처음에 등록된 것이 적용됨, if 설치되지 않은 폰트면 바로 다음에 지정된 폰트 적용), 폰트명이 한 단어인 경우는 따옴표가 필요없음
    3) font-style
        - Italic체의 지정
    4) font-weight
        - 폰트 굵기 지정
    5) font Shorthand
        - font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)

    Text
    1) line-height
        - 텍스트의 높이 지정 (텍스트 수직 정렬에도 응용되서 사용됨)
    2) letter-spacing
        - 글자 사이 간격을 지정
    3) text-align
        - 텍스트의 수평 정렬을 정의
    4) text-decoration
        - 링크 underline을 제거할 수 있음 | 텍스트에 underline, overline, line-through를 추가할 수 있음
    5) white-space
        - 공백, 들여쓰기, 줄바꿈을 의미 
        Ⅰ) normal: line break(무시) space/tab(1번만 반영) wrapping(O)
        Ⅱ) nowrap: line break(무시) space/tab(1번만 반영) wrapping(X)
        Ⅲ) pre: line break(반영) space/tab(그대로 반영) wrapping(X)
        Ⅳ) pre-wrap: line break(반영) space/tab(그대로 반영) wrapping(O)
        Ⅴ) pre-line: line break(반영) space/tab(1번만 반영) wrapping(O)
    6) text-overflow
        - 부모영역을 벗어난 wrapping이 되지 않은 텍스트의 처리 방법
        Ⅰ) clip: 영역을 벗어난 텍스트를 표시하지 않음 (default)
        Ⅱ) ellipsis: 영역을 벗어난 텍스트를 잘라내어 (...) 표시
        Ⅲ) <!-: 임의의 문자열을 출력 (FireFox 9.0~ 에서만 지원)
    7) word-wrap
        - 한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법 (word-wrap: break-word; -> 단어를 어느정도 고려해야 함 (.,- 등 고려))
    8) word-break
        - 한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법 (word-wrap: break-all; -> 단어 고려 필요없음)


※Position.html 참조※
8. Position
    1) Position
        - 요소의 위치 정의 (left, top, right, bottom)
        Ⅰ) static - 부모요소의 위치를 기준으로 배치됨 (default), 이미 설정된 position을 무력화하기 위해 사용될 수 있음, 좌표 Property (left, top, right, bottom) 무시됨
        Ⅱ) relative - 기본위치를 기준으로 좌표 Property를 사용하여 위치 이동
        Ⅲ) absolute - 부모 or 조상요소(static 제외)를 기준으로 좌표 Property만큼 이동
                       부모 요소를 기준으로 삼기위해서는 부모요소가 releative 이어야함, 다른 요소가 먼저 위치를 점유하고 있어도 뒤로 밀리지 않음
                       부모 or 조상요소가 static인 경우 document body를 기준으로 하여 좌표 프로퍼티 설정값대로 위치함
                       absolute 선언 시, block 레벨 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 함
        Ⅳ) fixed - 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치함
                    block 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 함
    2) z-index 
        - Property에 큰 숫자값을 지정할수록 화면 전면에 출력됨
    3) overflow
        - 자식요소가 부모요소의 영역을 벗어났을때 처리 방법 정의
        Ⅰ) visible - 벗어난 부분 표시 (default)
        Ⅱ) relative - 벗어난 부분 잘라내어 보이지 않게 함
        Ⅲ) absolute - 벗어난 부분이 없어도 스크롤 표시 (대부분 브라우저가 auto와 동일하게 동작)
        Ⅳ) auto - 벗어난 부분이 있을때만 스크롤 표시 (특정 방향으로만 스크롤을 표시하고자 할 때는 overflow-x or overflow-y 사용)


※Float.html 참조※
9. Float
    - 주로 레이아웃을 구성할 때 Block 레벨 요소를 가로 정렬하기 위해 사용되는 중요한 기법 (IE는 flexbox Layout 지원 안함), position 프로퍼티의 absolute를 사용하면 안됨 
    1) 정렬
        - 중앙 가로 정렬은 margin 프로퍼티를 사용해야 함
        Ⅰ) none - 요소를 떠 있게 하지 않음 (default)
        Ⅱ) right - 요소를 오른쪽으로 이동 (오른쪽부터 가로 정렬)
        Ⅲ) left - 요소를 왼쪽으로 이동 (왼쪽부터 가로 정렬)
    2) width
        - default (100%), 지정하지 않은 block요소는 부모요소의 가로폭을 가득 채움
    3) Float Property 관련 문제 해결 방법 (https://poiemaweb.com/css3-float 참고)
        Ⅰ) float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제
        Ⅱ) float 프로퍼티가 선언된 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제


10. Inheritance
    - 상위 요소에 적용된 Property를 하위 요소가 물려받는것을 의미함, inherbit 키워드를 사용하여 명시적으로 상속받을 수 있음
    (상속여부는 https://poiemaweb.com/css3-inheritance-cascading 상단 참조)


11. Cascading
    - css 적용 우선순위를 뜻함
    1) 중요도
        - CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라짐
        Ⅰ) head 요소 내의 style 요소
        Ⅱ) head 요소 내의 @import
        Ⅲ) <link>로 연결된 css 파일
        Ⅳ) <link>로 연결된 css 파일 내의 @import
        Ⅴ) 브라우저 default stylesheet
    2) 명시도
        - 대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아짐
          !important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성

    3) 선언순서
        - 선언된 순서에 따라 우선 순위가 적용됨. 즉, 나중에 선언된 스타일이 우선 적용됨


※Shadow.html 참조※
12. Shadow
    - 그림자 효과를 부여
    1) text-shadow
        Ⅰ) Horizontal-offset: 그림자를 텍스트의 오른쪽으로 지정값만큼 이동시킴 (단위: px)
        Ⅱ) Vertical-offset:	그림자를 텍스트의 아래로 지정값만큼 이동시킴 (단위: px)
        Ⅲ) Blur-Radius:	그림자의 흐림정도를 지정, 지정값만큼 그림자가 커지고 흐려짐	(단위: px) (생략 가능)
        Ⅳ) Shadow-Color: 그림자의 색상을 지정 (단위: color) (생략 가능)
    2) box-shadow
        Ⅰ) Inset: inset 키워드를 지정하면 그림자가 요소 안쪽에 위치	(단위: inset) (생략 가능)
        Ⅱ) Horizontal-offset: 그림자를 Box의 오른쪽으로 지정값만큼 이동시킴 (단위: px)
        Ⅲ) Vertical-offset:	그림자를 Box의 아래로 지정값만큼 이동시킴 (단위: px)
        Ⅳ) Blur-Radius:	그림자의 흐림정도를 지정, 지정값만큼 그림자가 커지고 흐려짐	(단위: px) (생략 가능) (양수)
        Ⅴ) Spread: 그림자를 더 크게 확장 (단위: px) (생략 가능) (양수, 음수)
        Ⅵ) Shadow-Color: 그림자의 색상을 지정 (단위: color) (생략 가능)


※Gradient.html 참조※
13. Gradient
    - 2가지 이상의 색상을 혼합하여 부드러운 색감의 배경 생성, 작성 툴을 이용하는 것이 보편적(Link: http://www.colorzilla.com/gradient-editor/)
    1) 선형 Gradient
    2) 방사형 Gradient


※Transition.html 참조※
14. Transition (Link: https://poiemaweb.com/css3-transition 참고)
    - Property값이 변화할때, 값의 변화가 일정 시간에 걸쳐 일어나도록 하는 것, 자동으로 발동되지 않고 가상클래스 선택자나, JS의 부수적인 Action에 의해 발동됨
    1) transition-property: 트랜지션의 대상이 되는 CSS 프로퍼티를 지정 (default: all)
        - Transition의 대상이 될 수 있는 Property List
        Ⅰ) BoxModel: width, height, max-width, max-height, min-width, min-height
        Ⅱ) padding margin:, border-color, border-width, border-spacing
        Ⅲ) Background: background-color, background-position
        Ⅳ) 좌표: top, left, right, bottom
        Ⅴ) text: color, font-size, font-weight, letter-spacing, line-height, text-indent, text-shadow, vertical-align, word-spacing
        Ⅵ) 기타: opacity, outline-color, outline-offset, outline-width
    2) transition-duration: 트랜지션이 일어나는 지속시간을 초 단위 또는 밀리 초 단위로 지정 (default: 0s)
    3) transition-timing-function: 트랜지션 효과를 위한 수치 함수를 지정 (default: ease)
        Ⅰ) ease: 느리게 시작하여 점점 빨라졌다가 느리지면서 종료
        Ⅱ) linear: 시작부터 종료까지 등속 운동
        Ⅲ) ease-in: 느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 운동
        Ⅳ) ease-out: 일정한 속도의 등속으로 시작해서 점점 느려지면서 종료
        Ⅴ) ease-in-out: ease와 비슷하게 느리게 시작하여 느리지면서 종료
    4) transition-delay: 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위 또는 밀리 초 단위로 지정 (default: 0s)
    5) transition Shorthand
        - transition: property duration function delay


※Animation.html 참조※
15. Animation
    - HTML 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 변화시킴, 가상클래스 선택자나, JS의 부수적인 Action에 의해 발동됨
    1) @keyframes
        - 시간의 흐름에 따라 Animation을 정의, (from, to)나 %로 시작 종료 지정
    2) animation-name
        - Animation의 이름 지정
    3) animation-duration
        - 1 Cycle Animation에 소요되는 시간을 /s, /ms단위로 지정 (default: 0s)
    4) animation-timing-function
        - Animation 효과를 위한 수치 함수를 지정 (default: ease) (Link: https://apes0113.postype.com/post/2620)
    5) animation-delay
        - Load된 시점과 실제로 시작하는 사이에 대기하는 시간을 /s, /ms 단위로 지정
    6) animation-iteration-count
        - 재생횟수 지정, infinite로 무한반복 가능 (default: 1)
    7) animation-direction
        - Animation이 종료된 이후 반복될 때 진행방향 지정
        Ⅰ) normal: from(0%)->to(100%) (default)
        Ⅱ) reverse: to->from
        Ⅲ) alternate: 홀수는 normal, 짝수는 reverse
        Ⅳ) alternate-reverse: 홀수는 reverse, 짝수는 normal
    8) animation-fill-mode
        - Animation 미실행 시 요소의 스타일 지정
        Ⅰ) none
            ⅰ. 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기
            ⅱ. 애니메이션 실행 전 상태로 애니메이션 요소의 Property 값을 되돌리고 종료
        Ⅱ) forwards
            ⅰ. 시작 프레임(from)에 설정한 스타일을 적용하지 않고 대기
            ⅱ. 종료 프레임(to)에 설정한 스타일을 적용하고 종료
        Ⅲ) backwards
            ⅰ. 시작 프레임(from)에 설정한 스타일을 적용하고 대기
            ⅱ. 애니메이션 실행 전 상태로 애니메이션 요소의 프로퍼티값을 되돌리고 종료
        Ⅳ) both
            ⅰ. 시작 프레임(from)에 설정한 스타일을 적용하고 대기
            ⅱ. 종료 프레임(to)에 설정한 스타일을 적용하고 종료

    9) animation-play-state
        - Animation 재생상태 지정 (default: running)
    10) animation Shorthand
        - animation: name duration timing-function delay iteration-count direction fill-mode play-state


※Transform.html 참조※
16. Transform (Transform.html의 주석으로 설명 대체)
    - 요소에 이동(translate), 회전(rotate), 확대축소(scale), 비틀기(skew) 효과를 부여하기 위한 함수를 제공, 애니메이션 효과를 부여할 필요가 있다면 트랜지션 or 애니메이션과 함께 사용
    1) 2D Transform
    2) 3D Transform


※Typography.html 참조※
17. Typography
    - WebPage는 불특정 사용자를 위해 제작되기 때문에 어떤 디바이스의 어떤 OS를 사용하는 사용자가 웹페이지에 접근할 지 알 수 없어서 사용됨
    - 영문과 한글을 혼용하는 경우 먼저 영문 폰트, 그 다음 한글 폰트를 지정하여야 함 -> 한글 폰트부터 지정하면 영문에도 한글 폰트가 지정됨
    1) CDN (Content Delivery NetWork) 링크 방식
        - 속도가 느림
    2) 서버 폰트 로딩 방식
        - CDN보다 속도가 빠름

    -> image 요소 아래에 패딩된 여분의 공간 제거: https://poiemaweb.com/css3-removing-white-space-image-element 참조


※Layout.html 참조※
18. Layout
    1) Header & Navigation Bar
        - 링크들의 리스트 / ul, li, tag를 이용하여 작성하는 것이 일반적
    2) Section & Aside
        Ⅰ) section - Content의 영역 (float Property를 사용하여 수평 정렬하는것이 일반적), Section영역을 article영역으로 다시 구분 할수 있음
        Ⅱ) aside - Content에 대한 Navigation item이나 부가 정보 영역 (float Property를 사용하여 수평 정렬하는것이 일반적)
        Ⅲ) footer - content-wrap 영역 다음에 footer를 배치 (absolute Property 설정)
            ※content-wrap: header 요소 뒤에 aside, section, article을 포함


※Responsive Layout.html 참조※
19. Responsive Layout
    - 화면 해상도에 따라 가로폭이나 배치를 변경하여 가독성을 높이는 것
    1) Viewport meta tag
        - Viewport: 웹페이지의 가시영역을 의미
        - 모바일 디바이스에만 적용됨
    2) @media
        - 서로 다른 미디어 타입(print, screen…)에 따라 각각의 styles을 지정하는 것을 가능하게 함
        - @media을 사용하여 미디어 별로 style을 지정하는 것을 Media Query라 함



※FlexBox Layout.html 참조※
20. FlexBox Layout
    - 모던 웹을 위하여 제안된 기존 layout보다 더 세련된 방식의 니즈에 부합하기 위한 CSS3의 새로운 layout 방식
    - 1줄의 코드 추가로 수평 정렬이 가능, 요소의 상하좌우 정렬, 순서 변경이 간단, 요소가 간격 조절이 간단, 서로 다른 height를 갖는 요소의 수평정렬 시, 간단히 상하중앙 정렬이 가능
    - flexbox를 사용하기 위해서 HTML 부모 요소의 display 속성에 flex를 지정


21. Horizontal & Vertical Centering
    1) 수평 정렬
        Ⅰ) inline/block 요소
            - text-align: center; 지정
        Ⅱ) block 요소
            - width: 200px, margin-left: auto; , margin-right: auto; 지정
        Ⅲ) 복수의 block 요소
            - 부모요소에 text-align: center; 지정, 자식요소에 width 지정 / display: inline-block으로 변경
        Ⅳ) FlexBox
            - justify-content: center; 지정  
    2) 수직 정렬
        Ⅰ) inline/block 요소
            ⅰ. Single Line
                - 정렬 대상의 부모 요소에 padding-top과 padding-bottom Property값을 동일하게 적용, padding을 사용할 수 없는 경우, 요소의 height와 line-height Property값을 동일하게 적용
            ⅱ. Multiple Lines
                - padding-top과 padding-bottom Property값을 동일하게 적용 or vertical-align Proerty 사용 (대신 display: table-cell을 지정해야함)
            ⅲ. FlexBox
                - justify-content: center; 지정
        Ⅱ) block 요소
            ⅰ. 높이가 고정인 경우
                - 부모 요소를 기준으로 절대 위치를 지정
            ⅱ. 높이가 불확정 상태인 경우
                - 부모 요소를 기준으로 절대 위치를 지정
            ⅲ. FlexBox
                - 부모 요소에 Flexbox layout을 지정
    3) 수평/수직 정렬
        1) 요소의 너비와 높이가 고정되어 있는 경우, 요소의 너비와 높이가 불확정 상태의 경우
            .parent {
                position: relative;
            }
            .child {
                position: absolute;
                top: 50%;
                left: 50%;
                /*요소의 높이/너비의 반(50%)만큼 위/왼쪽으로 이동*/
                transform: translate(-50%, -50%);
            }

        2) FlexBox
            .parent {
                display: flex;
                justify-content: center;
                align-items: center;
            }
    




HTML과 연동방법
    1. Link Style - 외부에 있는 CSS파일을 로드하는 방식, ex) <link rel="stylesheet" href="css/style.css">
    2. Embedding Style - HTML내부에 CSS를 포함시키는 방식 ex) <style> h1 {color: red} </style>
    3. Inline Style - style 프로퍼티에 CSS를 기술하는 방식, JS가 동적으로 CSS를 생성할때 사용하는 경우가 있음, ex) <h1 style="color: red">Hello CSS</h1>
