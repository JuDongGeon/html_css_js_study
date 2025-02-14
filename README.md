# HTML

    1. a tag 사용법 : 네비게이션
        - href 속성에 값을 부여함
            1. url : 다른 웹사이트로 이동함
                - 주소값을 입력하면 되는 http 또는 http + ://를 적어야 작동함

            2. #id : 해당 id와 동일한 id를 가진 태그로 이동함 (현재 페이지 내)
                - 이동시킬 태그에 id값을 넣은 뒤 a 태그 href 안에 id와 동일한 값을 넣어야 연결됨.
                - 연결된 태그를 누를때마다 주소창 끝부분에 해당 id가 자동입력됨

            3. 파일명 : 예시-> index.html 해당 파일로 이동 (페이지 전환)
                - href 안에 파일명 안에 파일명을 작성하면 됨

            4. 파일 다운로드 : 파일

    2. form 태그 : 양식을 제출하는 의미
         - 인풋창 입력하고 Enter 했을때 작동하면 약식 : 폼
         - ctrl + shift + c 개발자도구로 form 태그 확인
            ex - 회원가입, 인스타 댓글, 카톡 채팅창
         - 추가 수정(Create/Update) 용도
         - 사용 방법
            - label + input + select : 내용물
            - button : 동작하는 버튼
         - 제출되었을때 무조건 새로고침을 하는 특징을 가짐 => 자바스크립트 설정으로 방지 가능

    3.input 태그
         - type : 글자 또는 비밀번호 암호화 가능 ctrl + spacebar
         - label 태그와 연결가능 => label의 for 값과 input id값을 동일하게 주면 됨

    4. select 태그
         - label과 연결해서 사용하기 좋음
         - option 태그와 사용함
            ex>
            <select>
               <option value="옵션1">option1</option>
            </select>
            설명 : 보이는 글자가 아닌 op
         - ㅠㅍㅁ

# CSS

# JS

# 오늘의 실습

    1. form, div, label, input, button 태그 사용해서 회원가입 폼 뼈대 만들기
        - 영어로 된 아이디가 있어야함
        - 비밀번호가 있어야 함
        - 새로운 비밀번호가 있어야 하고 비밀번호가 같은지 유효검사를 해야함
        - 생년원일 // YYMMDD
        - 회원가입 / 취소 버튼 만들기

    2. styling 하기
        - 자유롭게

    3. 자바스크립트로 양식 다루기
        - 변수로 잡을 것들
            1. form
            2. userid
            3. password
            4. confirmPassword
            5. 생년월일

        - 할것들
            1. form + addEventListener 이벤트는 submit
                1-1. 새로고침 방지
                1-2. userid 입력했는지 검사 => 미입력시 input창 포커스
                1-3. password 입력했는지 검사 => 미입력시 input창 포커스
                1-4. confirmPassword랑 같은지 검사 => 다를 시 input창 포커스
            2. 생년월이 6자리인지 검사
            3. 다 입력되면 회원가입 축하멘트 출력
            4. 입력 취소시 취소 멘트 출력
