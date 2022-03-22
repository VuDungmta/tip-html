var mockData = [
  {
    name: "test",
    price: 999,
    picture: "",
  },
  {
    name: "test",
    price: 999,
    picture: "",
  },
  {
    name: "test",
    price: 999,
    picture: "",
  },
  {
    name: "test",
    price: 999,
    picture: "",
  },
];

const data = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    var products = document.querySelector(".products");
    products.innerHTML = "";
    data.forEach((item) => {
      var newItem = document.createElement("div");
      newItem.classList.add("product");
      newItem.innerHTML = `
        <img
          src="https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/b/u/burberry-dark-carbon-pocket-detail-technical-wool-tailored-trousers-brand-size-6-us-size-4-8030178.jpg?width=546&height=546"
          alt=""
        />
        <div class="info">
          <div class="name">${item.title}</div>
          <div class="price">${item.price}</div>
        </div>
     `;
      products.appendChild(newItem);
    });
  });
var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim();
  let listProductDom = document.querySelectorAll(".products");
  listProductDom.forEach((item) => {
    if (item.innerText.includes(txtSearch)) {
      console.log(item.innerText);
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
