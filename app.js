// selectors
const todoInput = document.querySelector(".todo-input ");
const todoButton = document.querySelector(".todo-button ");
const todoList = document.querySelector(".todo-list "); //gets the whole added list including details and buttons
const filterOption = document.querySelector(".filter-todo");
const message = document.querySelector(".message");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//function

function addTodo(event) {
  //prevent from submitting (from refresh)
  event.preventDefault();

  if (todoInput.value.trim() !== "") {
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash mark
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to todo-list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
  } else {
    message.classList.add("show");
    setTimeout(function () {
      message.classList.remove("show");
    }, 2000);
  }
}

function deleteCheck(e) {
  const item = e.target; //gets the particular element when clicked
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement; //to get the whole parent element
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //mark it checked
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    //   console.log(todo)
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex ";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
