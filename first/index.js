// 문자열 글자 '',"",`` 중 하나를 써야함
const myString = "주동건";
const body = document.querySelector("body");
const p = document.createElement("p");

p.innerText = myString;

p.style.color = "blue";
p.className = "header";

body.append(p);
