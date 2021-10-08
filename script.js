//kumpulan UI element
const addForm = document.querySelector(".add-form");
const addInput = document.querySelector(".add-input");
const todosSelector = document.querySelector(".todos");
const clearBtn = document.querySelector("#clear-btn");

//kumpulan event listener
immediateLoadEventListener();

function immediateLoadEventListener() {
  //mendapatkan todo dari local storage
  document.addEventListener("DOMContentLoaded", getTodos);

  //mengosongkan todo di local storage
  document.addEventListener("DOMContentLoaded", clearTodosStorage);

  // event untuk menambahkan todo
  addForm.addEventListener("submit", addTodo);

  // event untuk menghapus semua todo
  clearBtn.addEventListener("click", clearTodos);

  //event untuk menghapus satu todo
  todosSelector.addEventListener("click", deleteTodo);
}

// DOM function

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const span = document.createElement("span");
    span.className = "todo";
    span.appendChild(document.createTextNode(todo));
    const a = document.createElement("a");

    a.className = "fa fa-trash";
    a.href = "#";

    a.id = "delete-todo";

    span.appendChild(a);
    todosSelector.appendChild(span);
    addTodoToLocalStorage(addInput.value);
  });
}

function addTodo(e) {
  e.preventDefault();
  if (addInput.value === "") {
    alert("Input todo terlebih dahulu!!!");
  } else {
    const span = document.createElement("span");
    span.className = "todo";
    span.appendChild(document.createTextNode(addInput.value));
    const a = document.createElement("a");

    a.className = "fa fa-trash";
    a.href = "#";

    a.id = "delete-todo";

    span.appendChild(a);

    todosSelector.appendChild(span);

    addTodoToLocalStorage(addInput.value);
  }
}

function addTodoToLocalStorage(addInputValue) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(addInputValue);

  localStorage.setItem("todos", JSON.stringify(todos));
  addInput.value = "";
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
  if (todosSelector.innerHTML === "") {
    alert("Todo list masih kosong!");
  } else if (confirm("Apakah anda yakin akan menghapus todo list?"))
    todosSelector.innerHTML = "";
}

function clearTodosStorage() {}
