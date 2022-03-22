var btnSearch = document.querySelector(".search-box__btn");
btnSearch.addEventListener("click", function () {
  //arrow function khong co this. tuyet doi khong de arrow function
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
