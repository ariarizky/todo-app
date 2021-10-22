//kumpulan UI element
const addForm = document.querySelector(".add-form");
const addInput = document.querySelector(".add-input");
const todosSelector = document.querySelector(".todos");
const clearBtn = document.querySelector("#clear-btn");
const addHeader = document.querySelector(".add-header");

//kumpulan event listener
immediateLoadEventListener();

function immediateLoadEventListener() {
  //mendapatkan todo dari local storage
  document.addEventListener("DOMContentLoaded", getTodos);

  // event untuk menambahkan todo
  addForm.addEventListener("submit", addTodo);

  // event untuk menghapus semua todo
  clearBtn.addEventListener("click", clearTodos);

  //event untuk menghapus satu todo
  todosSelector.addEventListener("click", deleteTodo);

  //event untuk menyembunyikan add form
  addHeader.addEventListener("click", hiddenAdd);
}

//reusable code
function createTodoElement(value) {
  const span = document.createElement("span");
  span.className = "todo";
  span.appendChild(document.createTextNode(value));
  const a = document.createElement("a");

  a.className = "fa fa-trash";
  a.href = "#";

  a.id = "delete-todo";

  span.appendChild(a);

  todosSelector.appendChild(span);
}

function getItemFromLocalStorage() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
// DOM function

function getTodos() {
  const todos = getItemFromLocalStorage();
  todos.forEach((todo) => {
    createTodoElement(todo);
  });
}

function addTodo(e) {
  e.preventDefault();
  if (addInput.value === "") {
    alert("Input todo terlebih dahulu!!!");
  } else {
    createTodoElement(addInput.value);
    addTodoToLocalStorage(addInput.value);
  }
}

function addTodoToLocalStorage(addInputValue) {
  const todos = getItemFromLocalStorage();
  todos.push(addInputValue);

  localStorage.setItem("todos", JSON.stringify(todos));
  addInput.value = "";
}

function deleteTodo(e) {
  e.preventDefault();
  if (confirm("Apakah anda yakin akan menghapus todo ini?")) {
    const parent = e.target.parentElement;
    parent.remove();
    deleteTodoLocalStorage(parent);
  }
}
function deleteTodoLocalStorage(deletedElement) {
  const todos = getItemFromLocalStorage(); //menghapus element parent todo
  todos.forEach((todo, index) => {
    if (deletedElement.firstChild.textContent === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function clearTodos(e) {
  e.preventDefault();
  if (todosSelector.innerHTML === "") {
    alert("Todo list masih kosong!");
  } else if (confirm("Apakah anda yakin akan menghapus todo list?"))
    todosSelector.innerHTML = "";
  localStorage.clear();
  addForm.style.display = "none";
}
function hiddenAdd() {
  addForm.style.display = "flex";
}

/*function clearTodosLocalStorage() {
  localStorage.clear();
}
*/
