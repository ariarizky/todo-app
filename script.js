const addForm = document.querySelector(".add-form");
const addInput = document.querySelector(".add-input");
const todos = document.querySelector(".todos");
const clearBtn = document.querySelector("#clear-btn");

addForm.addEventListener("submit", addTodo);
clearBtn.addEventListener("click", clearTodos);
todos.addEventListener("click", deleteTodo);

function addTodo(e) {
  e.preventDefault();
  if (addInput.value === "") {
    alert("Input todo terlebih dahulu!!!");
  } else {
    const span = document.createElement("span");
    span.className = "todo";
    span.appendChild(document.createTextNode(addInput.value));
    const a = document.createElement("a");
    a.href = "#";
    a.className = "fa fa-trash-o";
    a.id = "delete-todo";

    span.appendChild(a);

    todos.appendChild(span);
    addInput.value = "";
  }
}
function deleteTodo(e) {
  e.preventDefault();
  if (confirm("Apakah anda yakin akan menghapus todo ini?")) {
    const parent = e.target.parentElement;
    parent.remove();
  }
}

function clearTodos(e) {
  e.preventDefault();
  if (confirm("Apakah anda yakin akan menghapus todo list?"))
    todos.innerHTML = "";
}
