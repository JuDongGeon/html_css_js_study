const form = document.querySelector("body > form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault(); //새로고침방지

  const name = document.querySelector("#r");
  console.log(name.value);

  const item = document.querySelector("#i");
  console.log(item.value);

  const address = document.querySelector("#adr");
  console.log(address.value);

  const message = `${name.value}님 저희 천혜향 농장을 찾아주셔서 감사합니다. 선택하신 상품의 가격은 ${item.value}원 입니다. 받으실 주소지는 ${address.value}가 맞으신가요? `;

  if (confirm(message)) {
    alert("감사합니다. 주문이 완료되었습니다.");
  } else {
    alert("주문이 취소되었습니다.");
  }
});
