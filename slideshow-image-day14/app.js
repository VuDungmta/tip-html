var imageFeature = document.querySelector(".img-feature");
var listImag = document.querySelectorAll(".list-image img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var currentIndex = 0;

function updateImageByIndex(index) {
  currentIndex = index;
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });
  imageFeature.src = listImag[index].getAttribute("src");
  listImag[index].parentElement.classList.add("active");
}

listImag.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    imageFeature.style.opacity = "0";
    setTimeout(() => {
      updateImageByIndex(index);
      imageFeature.style.opacity = "1";
    }, 400);
  });
});

prevBtn.addEventListener("click", (e) => {
  if (currentIndex > 0) {
    imageFeature.style.animation = "";
    nextBtn.classList.remove("hide");
    prevBtn.classList.remove("hide");
    setTimeout(() => {
      updateImageByIndex(currentIndex - 1);
      imageFeature.style.animation = "slideLeft 1s ease-in-out forwards";
    }, 400);
    return;
  }
  prevBtn.classList.add("hide");
});

nextBtn.addEventListener("click", (e) => {
  if (currentIndex < listImag.length - 1) {
    imageFeature.style.animation = "";
    setTimeout(() => {
      updateImageByIndex(currentIndex + 1);
      imageFeature.style.animation = "slideRight 1s ease-in-out forwards";
    }, 400);
    nextBtn.classList.remove("hide");
    prevBtn.classList.remove("hide");
    return;
  }
  nextBtn.classList.add("hide");
});
