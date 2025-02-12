# HTML

    1. HTML이란?(HyperTextMarkdownLanguage)
        - 웹페이지를 만드는 언어
        - 웹 페이지 뼈대

    2. HTML의 구성요소
        2-1. head : meta, link, style 등등 넣을 수 있음
        2-2. body : 나머지 모든 태그가 들어갈 수 있음
            **주의사항** script 태그는 바디의 끝부분에 추가해야함 => 실행이 안되는 오류가 생김
    3. body에 들어가는 태그들
        - header : 웹페이지에서 딱 한 번 들어가면 됨. 웹페이지의 제목, 메뉴버튼, 네브바, 메뉴 이동 버튼 등
        - footer : 바닥글로 딱 한 번 들어감. 기타 잡다한 내용들(넣고싶은거)
          한국은 사업자등록번호, 사업장소재지, 대표자명 등이 들어감
        - main : 모든 태그 넣을 수 있음. 정말 중요한 요소들만 넣어줌

    4. xo태그

# CSS

    1. CSS란? (CascadingStyleSheet)
        - 웹 꾸미기

        ## in-line style
            <div style = "display:flex;">

        ## style tag
            <head>
                <style>
                div{
                    display : flex;
                }
                </style>

        ## 외부 스타일시트 연결
            1. htmml > head안에 link 태그로 스타일시트 연결
            2. styleFile.css를 만들어서 스타일 작성

# JS

    1. 기능 구현 (웹 개발의 90%이상)
