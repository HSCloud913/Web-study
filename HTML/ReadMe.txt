HTML



반드시 <!DOCTYPE html> 으로 시작 (HTML5)


HTML 요소 - 시작태그, 종료태그, 태그사이에 위치한 content로 구성
            -> ex) <p>HSCloud</p>

Empty 요소 - content를 가질 수 없는 요소
            -> ex) br hr img input link meta ...

Attribute - 요소의 성질, 특징을 정의하는 명세, 요소는 Attribute를 가질 수 있으며 추가적 정보 제공
            -> ex) <img src="html.png"> (src가 Attribute Name)


Global Attribute - 모든 html 요소가 공통으로 사용할 수 있는 Attribute
    1. id - 유일한 식별자(id)를 요소에 지정 (중복불가)
    2. class - 스타일시트에 정의된 class 요소에 지정 (중복가능)
    3. hidden - css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 함
    4. lang - 지정된 요소의 언어를 지정. 검색엔진 크롤링시 웹언어 인식 가능케함
    5. style - 요소에 인라인 스타일 지정
    6. tabindex - 사용자가 키보드로 페이지를 내비게이션시 이동순서 지정
    7. title - 요소에 관한 제목 지정
    8. Etc...


주석 - <!-- string -->


Semantic
    non-semantic - div, span등이 있음, content에 대해 어떤 설명도 하지 않음
    semantic - form, table, img등이 있음, content의 이미를 명확히 설명

    tag list (Semantic Tag.PNG 참조)
        1. header - 헤더를 의미
        2. nav - 내비게이션 의미
        3. aside - 사이드에 위치하는 공간 의미
        4. section - 본문의 여러 내용(article)을 포함하는 공간 의미
        5. article - 본문의 주내용이 들어가는 공간 의미
        6. footer - 푸터를 의미


Tag
    Base Tag
        html tag - 웹페이지에 단 하나만 존재, 모든 요소는 html tag 내부에 기술해야함, Global Attribute 지원, lang Attribute를 사용하는 경우가 많음
        head tag - metadata를 포함하기 위한 요소, 웹페이지에 단 하나만 존재, 화면에 표시되지 않음, metadata 이외의 화면에 표시되는 일체의 요소를 포함시킬수 없음
        title tag - 문서의 제목 정의, 브라우저 탭에 표시됨
        style tag - HTML문서를 위한 style 정보를 정의
        link tag - 외부 리소스와의 연계 정보를 정의 / 주로 HTML과 외부 CSS파일 연계시 사용
        script tag - client-side JS를 정의한다
        meta tag - description, keywords, author, 기타 metadata 정의에 사용됨
            1. <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"> SEO(검색엔진 최적화)
            2. <meta name="description" content="HSCloud HTML Study"> 설명정의
            3. <meta name="author" content="HSCloud"> 저자정의
            4. <meta http-equiv="refresh" content="30> Refresh 시간 지정
            5. Etc...
        body tag - HTML문서 내용을 나타냄, 웹페이지에 단 하나만 존재, metadata를 제외한 웹페이지를 구성하는 대부분의 요소가 body내에 기술됨
    
    Text Tag
        Heading Tag - 제목 이외에는 사용하지 않는것이 좋음 (1~6까지 있음)
        Text Formatting Tag
            1. b - bold체 지정 (Semantic 중요성 없음)
            2. strong - b와 동일하게 bold체 지정 (Semantic 중요성 있음)
            3. i - Italic체 지정 (Semantic 중요성 없음)
            4. em(emphasized 강조) - i와 동일하게 Italic체 지정 (Semantic 중요성 있음)
            5. small - small text를 지정 (Semantic 중요성 없음)
            6. mark - highlighted text를 지정 (Semantic 중요성 없음)
            7. del - deleted text(취소선)를 지정 (Semantic 중요성 없음)
            8. ins - inserted text를 지정 (Semantic 중요성 없음)
            9. sub/sup - sub는 아래에 쓰인 Text, sup은 위에 쓰인 Text 지정 (Semantic 중요성 없음)
        본문 Tag
            1. p - 단락 지정
            2. br - 강재 개행 지정, 종료태그가 없음, 1개 이상의 연속된 공백이나 줄바꿈을 1개의 공백으로 표시 (&nbsp; 사용시 공백삽입) 
            3. pre - 형식화된 text를 지정, pre tag 내의 content는 작성된 그대로 브라우저에 표시됨
            4. hr - 수평줄 삽입, 종료태그가 없음
            5. q - 짧은 인용문을 지정
            6. blockquote - 긴 인용문 블럭을 지정, 브라우저는 해당항목을 들여쓰기함, css를 이용하여 다양한 style 적용 가능
    
    List Tag - 내배게이션 메뉴를 만들때 주로 사용
        Unordered List - li Tag를 ul 태그로 감쌈
        Ordered List - li Tag를 ol 태그로 감쌈, type Attribute를 사용하여 문자 지정 (type="1", type="A", type="a", type="I", type="i" ...)
        중첩 List

    Table Tag - 표를 만들떄 사용
        table - 표를 감싸는 태그
            1. border - 표 테두리 두께 지정
            2. rowspan - 해당 셀이 점유하는 행의 수 지정
            3. colspan - 해당 셀이 점유하는 열의 수 지정
        tr - 표 내부의 행
        th - 행 내부의 제목 셀
        td - 행 내부의 일반 셀

        Example
            <table border="1"> 굵기 지정
                <tr>
                    <th>1</th> <th>2</th> <th>3</th>
                </tr>
                <tr>
                    <td>A</td> <td>B</td> <td>C</td>
                </tr>
                <tr>
                    <td>ㄱ</td> <td>ㄴ</td> <td>ㄷ</td>
                </tr>
            </table>

    multimedia Tag
        img Tag
            Attribute
                1. src - Img Path
                2. alt - 파일이 없을경우 표시되는 문장 (액박)
                3. width - 이미지의 너비
                4. height - 이미지의 높이
                    -> width나 height 둘중 하나만 지정하는경우 이미지 비율에 맞춰서 지정됨

        media Tag (파일형식 지원여부는 https://poiemaweb.com/html5-tag-image-multimedia 참조)
            1. audio - IE8이하에서 사용불가능, type Attribute 생략 가능, source 태그를 사용하여 형식차이 문제 해결가능
                a. src - Path
                b. preload - 재생전에 음악 파일을 모두 불러올것인지 지정
                c. autoplay - 음악파일을 자동의 재생 게시할 것인지 지정
                d. loop - 음악을 반복할것인지 지정
                e. controls - 음악 재생 도구를 표시할 것인지 지정 (브라우저마다 차이가 있음)

            2. video - IE8이하에서 사용불가능, type Attribute 생략 가능, source 태그를 사용하여 형식차이 문제 해결가능
                a. src - Path
                b. poster - 동영상 준비중에 표시될 이미지 파일 경로 (썸네일)
                c. preload - 재생 전에 동양상 파일을 모두 불러올 것인지 지정
                d. autoplay - 동영상파일을 자동의 재생 게시할 것인지 지정
                e. loop - 동영상을 반복할것인지 지정
                f. controls - 동영상 재생 도구를 표시할 것인지 지정 (브라우저마다 차이가 있음)
                g. width - 너비 지정
                h. height - 높이 지정

    form Tag
        form Tag - 사용자가 입력한 데이터를 수집하기 위해 사용 (input, textarea, button, select, checkbox, radio button, submit button, ... 같은 입력양식 태그를 포함가능)
            Attribute
                1. action(Val: URL) - 입력데이터가 전송될 URL 지정
                2. method(Val: GET/POST) - 입력데이터 전달 방식 지정
                    a. GET
                        ◆ 전송 URL에 입력데이터를 쿼리스트링으로 보내는 방식 ex) http://jsonplaceholder.typicode.com/posts?userId=1&id=1
                        ◆ 전송 URL 바로 뒤에 '?'를 통해 데이터의 시작을 알려주고, key-valuew형태의 데이터 추가, 복수의 전송 데이터는 '&'로 구분
                        ◆ URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있음, 전송데이터의 한계가 있음(string length = 255)
                        ◆ REST API에서는 모든 또는 특정 리소스의 조회 요청
                    b. POST
                        ◆ Request Body에 담아 보내는 방식 ex) http://jsonplaceholder.typicode.com/posts
                        ◆ URL에 전송 데이터가 노출되지 않지만 GET에 비해 속도가 느림
                        ◆ REST API에서는 특정 리소스의 생성을 요청

        input Tag 
            - form tag 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기위해 사용
            - name Attribute를 Key로, value Attribute를 값으로 하여 key=value 형태로 전송
            - type Attribute는 https://poiemaweb.com/html5-tag-forms 참조 

        select Tag - 복수개의 리스트에서 복수개의 아이템을 선택할때 사용
            함께 사용할수 있는 태그
                1. option - option 생성
                2. optgroup - option을 그룹화

        textarea Tag - 여러 줄의 글자를 입력할 때 사용

        button Tag - 클릭할 수 있는 버튼 생성, 텍스트나 이미지 같은 content 사용가능, HTML요소도 받을 수 있음 (Attribute로 button, reset, submit을 지정가능)

        fieldset - 관련된 입력 양식들을 그룹화할 때 사용

        legend - fieldset 태그 내에서 사용되어야 함, 그룹화된 fieldset의 제목을 정의


Layout - 공간을 분할할 수 있는 태그 (div, span, table), div는 Semantic 중요성이 없기때문에 Semantic 태그를 사용하는것이 나으나 IE에서 작동하지 않음


HyperLink - 한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 기능, a tag가 역할을 담당
    1. href Attribute - 이동하고자하는 파일의 위치를 값으로 받음
        a. Directory
            ◆ Root Directory - FileSystem 게층 구조상의 최상위 Directory (Unix: /, Windows: C:\)
            ◆ Home Directory - 사용자에게 할당된 개별 Directory (Unix: /Users/{Name}, Windows: C:\Users\{Name})
            ◆ Working Directory - 작업중인 파일이 위치한 Directory (./)
            ◆ Parent Directory - Working Directory의 Parent Directory (../)
        b. File Path
            ◆ Absolute Path - 특정파일의 절대적인 위치를 가르킴
            ◆ Relative Path - 현재 작업 Dir을 기준으로 특정파일의 상대적인 위치를 가르킴
        c. 사용가능한 값
            ◆ 절대 URL
            ◆ 상대 URL
            ◆ Fragment identifier
            ◆ 메일
            ◆ Script
    2. Target Attribute - 링크를 클릭했을때 윈도우를 어떻게 오픈할지 지정
        a. _self - 현재 윈도우에서 오픈 (Default)
        b. _blank - 새로운 탭으로 오픈