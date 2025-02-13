const login = document.querySelector("#login");

const modal = document.querySelector.apply("div.login-modal");

login.onclick = () => {
  alert("로그인 모달 창");

  modal.style.display = "block";
};

const closeBtn = document.querySelector(".login-modal > button");
closeBtn.onclick = () => {
  closeBtn.style.display = "none";
};
