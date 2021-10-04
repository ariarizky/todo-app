const addForm = document.querySelector(".add-form");
const addInput = document.querySelector(".add-input");
const todos = document.querySelector(".todos");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const span = document.createElement("span");
  span.className = "todo";
  span.appendChild(document.createTextNode(addInput.value));
  todos.appendChild(span);
  console.log(span);
});
