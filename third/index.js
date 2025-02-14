const form = document.querySelector("body > form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.querySelector("#id");
  console.log(id.value);

  const pw = document.querySelector("#pw");
  console.log(pw.value);

  const rePw = document.querySelector("#re-pw");
  console.log(rePw.value);

  const birth = document.querySelector("#birth");
  console.log(birth.value);

  if (id.value.length === 0) {
    alert("아이디를 입력하세요");
    return id.focus();
  }

  if (pw.value.length === 0) {
    alert("비밀번호를 입력하세요");
    return pw.focus();
  }

  if (rePw.value.length === 0) {
    alert("비밀번호를 한번 더 입력하세요");
    return rePw.focus();
  }

  if (pw.length != rePw.length) {
    alert("비밀번호가 맞는지 확인하세요");
    return rePw.focus();
  }

  if (birth.value.length === 0) {
    alert("생년월일을 입력하세요");
    return birth.focus();
  }

  if (birth.value.length === 6) {
    alert("생년월일을 다시입력하세요");
    return birth.focus();
  }

  const message = `아이디 : ${id.value}
비밀번호 : ${pw.value}
생년월일 : ${pw.value}
해당 정보로 가입하시겠습니까?`;

  if (confirm(message)) {
    alert("회원가입 되었습니다.");
  } else {
    alert("회원가입을 취소하였습니다.");
  }
});
