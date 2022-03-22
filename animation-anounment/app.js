var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function (e) {
  createToast("success");
});
btnWarning.addEventListener("click", function (e) {
  createToast("warning");
});
btnError.addEventListener("click", function (e) {
  createToast("error");
});

function createToast(status) {
  let templateInner = ``;
  switch (status) {
    case "success":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
            <span class="message"> This is a Success message</span>
            <span class="countdown ${status}"></span>`;
      break;
    case "warning":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
        <span class="message"> This is a Warning message</span>
        <span class="countdown ${status}"></span>`;
      break;
    case "error":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
        <span class="message"> This is a Error message</span>
        <span class="countdown ${status}"></span>`;
  }
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = templateInner;
  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);
  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, 4000);
  setTimeout(function () {
    toast.remove();
  }, 6000);
}
