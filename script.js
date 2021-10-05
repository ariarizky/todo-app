const addForm = document.querySelector(".add-form");
const addInput = document.querySelector(".add-input");
const todos = document.querySelector(".todos");
const clearBtn = document.querySelector("#clear-btn");
console.log(clearBtn);

addForm.addEventListener("submit", addTodo);
clearBtn.addEventListener("click", clearTodos);

function addTodo(e) {
  e.preventDefault();
  if (addInput.value === "") {
    alert("Input todo terlebih dahulu!!!");
  } else {
    const span = document.createElement("span");
    span.className = "todo";
    span.appendChild(document.createTextNode(addInput.value));
    todos.appendChild(span);
    addInput.value = "";
  }
}

function clearTodos(e) {
  e.preventDefault();
  todos.innerHTML = "";
}
