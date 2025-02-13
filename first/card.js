const body = document.querySelector("body");

const btn = document.querySelector(".card_component .btn");

const img = document.querySelector(".card_component img");

const url =
  "https://cdn.pixabay.com/photo/2016/08/10/15/01/credit-cards-1583534_640.jpg";

img.src = url;

btn.onclick = () => {
  const a = document.createElement("a");
  a.href = url;

  if (confirm("해당이미지를 다운로드 하시겠습니까?")) {
    a.click();
  } else {
    alert("다운로드를 취소하였습니다.");
  }
};

const viewBtn = document.createElement("button");
let isCard = false;
viewBtn.innerText = "전체이미지";

viewBtn.onclick = () => {
  viewBtn.innerText = !isCard ? "카드" : "전체이미지";

  const card = document.querySelector(".card_component");
  card.className = !isCard ? "card_component fv" : "card_component";

  isCard = !isCard;
};

body.append(viewBtn);
