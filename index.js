const root = document.querySelector("#root");

const title = document.querySelector("h1");
const button = document.querySelector("button");
const con = document.querySelector(".con");

const messages = ["안내면 진다.", "가위", "바위", "보"];
let msgIndex = 0;

let intervalId = null;

const span = document.createElement("scan");
const span2 = document.createElement("scan");

let imgIndex = 0;
let imgIndex2 = 2;

const int = document.querySelectorAll("img");
// querySelectorAll은 해당 선택자의 모든 태그를 선택하여 배열로 반환한다.

const imgs = [
  "https://cdn-icons-png.flaticon.com/128/13480/13480938.png",
  "https://cdn-icons-png.flaticon.com/128/3562/3562093.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];

img.forEach((i, index) => (i.src = imgs[index]));

root.append(span);

button.onclick = () => {
  title.innerText = messages[msgIndex];
  if (msgIndex === messages.length - 1) {
    return (title.innerText = "이겼다");
  }

  msgIndex += 1;

  intervalId = setInterval(() => {
    if (time >= 3) {
      clearInterval(intervalId);
    }

    console.log("time is ticking...");
    if (imgIndex === 2) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }
    if (imgIndex2 === 2) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }

    span.innerText = time;

    const n1 = Math.floor(Math.random * 3);
    const n2 = Math.floor(Math.random * 3);

    span.innerText = imgIndex;
    span2.innerText = imgIndex2;
    img[0].src = imgs[imgIndex];
    img2[0].src = imgs[imgIndex2];
  }, 250);

  con.innerHTML = null;
  const h2 = document.createElement("h2");
  h2, (innerText = "VS");
  con.append(img[0], h2, img[2]);
};

const number = console.log(number);
