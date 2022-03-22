var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var button = document.querySelector(".btn-remove-all");
var tags = ["NodeJS", "Reactjs"];
function rerender() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<span> ${tag} <i class="fa-solid fa-xmark" onClick="removeTag(${i})"></i></span>`;
  }
  content.appendChild(input);
  input.focus();
}
rerender();

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    tags.push(input.value.trim());
    rerender();
  }
  input.value = "";
  input.focus();
});

button.addEventListener("click", function (e) {
  tags = [];
  rerender();
});

function removeTag(index) {
  tags.splice(index, 1);
  rerender();
}
