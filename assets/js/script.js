//CREATE A NEW TASK ITEM 
// STYLE THE NEW TASK ITEM 
//ADD THE TEXT 
//APPEND THIS ELEMENT TO THE TASK LIST

var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);