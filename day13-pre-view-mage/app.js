var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");
upload.addEventListener("change", function (e) {
  var file = upload.files[0];
  if (!file) {
    return;
  }

  if (file.name.endsWith(".jpg")) {
    error.innerHTML = `The image must be in jpeg format`;
    return;
  } else {
    error.innerHTML = ``;
  }

  if (file.size / (1024 * 1024) > 5) {
    console.log("uhu");
    error.innerHTML = `The image must be less than 5 MB`;
    return;
  } else {
    error.innerHTML = ``;
  }

  //hình ảnh được biêu diễn dưới hai dạng: đường dẫn và base64
  //hiển thi đường dẫn
  //   var img = document.createElement("img");
  //   img.src = URL.createObjectURL(upload.files[0]);
  //   preview.appendChild(img);

  //hiển thị base64
  //base 64. data is  bit 010101...
  var img = document.createElement("img");

  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onloadend = function (e) {
    img.src = e.target.result; //hiển thị base64
  };

  //   fileReader.onload = function () {
  //     console.log("load ", e);
  //   };
  preview.appendChild(img);
});
