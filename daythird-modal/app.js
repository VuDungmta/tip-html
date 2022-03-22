var btnOpen = document.querySelector(".opent-modal-btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal__header i");
var btnClose = document.querySelector("modal__footer button");
function toggleModal() {
  modal.classList.toggle("hide");
}
btnOpen.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
