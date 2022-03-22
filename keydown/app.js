var eKey = document.querySelector(".card.key p:last-child");
var eLocation = document.querySelector(".card.location p:last-child");
var eWhich = document.querySelector(".card.which p:last-child");
var eCode = document.querySelector(".card.code p:last-child");
var alertx = document.querySelector(".alert");
var box = document.querySelector(".box");
var result = document.querySelector(".results");

document.addEventListener("keydown", (e) => {
  console.log(e);
  //innerTex an toan hon vi inner html doan javascript tra hinh
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  result.innerText = e.code;

  alertx.classList.add("hide");
  box.classList.remove("hide");
});
