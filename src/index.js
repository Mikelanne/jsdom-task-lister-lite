document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // user should be able to type a task into the input field
  // user should be able to click some form of a submit button
    // use Event.preventDefault to make sure the form doesn't default to submitting the form itself.
  // user should be able to see the task string after submit button has been activated

// select create task button
const newTaskForm = document.getElementById("create-task-form")
newTaskForm.addEventListener('submit', handleSubmit) 
const toDoList = document.getElementById("tasks")

// {
//   event.preventDefault();
//   console.log("hello")
// }, false);

function handleSubmit(event) {
  event.preventDefault();
  // grab the task from the input field
  const userInputField = document.getElementById("new-task-description")
  const userInput = userInputField.value
  // add task to the list
  toDoList.innerHTML += `<li class="task">${userInput}</li>` 
}

});

// function submitForm(event) {
//   console.log("hello")
// }