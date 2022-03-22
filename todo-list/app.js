var inputSearch = document.querySelector("input");
var todoList = document.querySelector("ul");
var form = document.querySelector("form");
var todos = document.querySelector(".todo");

//const listTodo = ["d", "dw"];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let val = inputSearch.value.trim();
  if (val) {
    addTodoElement({
      text: val,
    });
    saveTodoList();
  }
  inputSearch.value = "";
});

function addTodoElement(todo) {
  var li = document.createElement("li");
  li.innerHTML = `<span>${todo.text}</span> <i class="fa-solid fa-trash-can"></i> `;
  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  li.addEventListener("click", function (e) {
    this.classList.toggle("completed");
    saveTodoList();
  });

  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
    saveTodoList();
  });

  todos.appendChild(li);
}
function saveTodoList() {
  let todoList = document.querySelectorAll("li");
  let todoStorage = [];
  todoList.forEach(function (item) {
    let value = item.querySelector("span").innerText;
    let status = item.getAttribute("class");
    todoStorage.push({
      text: value,
      status: status,
    });
  });
  localStorage.setItem("todolist", JSON.stringify(todoStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem("todolist").toString());
  data.forEach(function (item) {
    addTodoElement(item);
  });
}
init();
