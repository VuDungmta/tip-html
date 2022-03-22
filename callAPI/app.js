var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".humidity span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var container = document.querySelector("body");

async function changeWeatherUI() {
  let capitalSearch = search.value.trim();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=66f0ed8e5b81f15c60fccbaca5525852`;
  let data = await fetch(apiUrl).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    let temp = Math.round(data.main.temp);
    value.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleDateString("vi");

    if (temp < 22) {
      container.classList.add("cold");
    }
    if (temp < 25 && temp > 22) {
      container.classList.add("cool");
    }
    if (temp > 25 && temp < 30) {
      container.classList.add("warm");
    }
    if (temp > 30) {
      container.setAttribute("class", "hot");
    }
  } else {
    content.classList.add("hide");
  }
}
changeWeatherUI();

search.addEventListener("keypress", function (e) {
  if (e.code == "Enter") {
    changeWeatherUI();
  }
});
