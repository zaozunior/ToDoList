let newTask;
let taskList;
function addTask () {
   let userInput = document.getElementById("taskInput");
   let newTaskText = userInput.value.trim();
      if (newTaskText === "") {
        alert("Digite uma tarefa válida!");
      } else {
    newTask = document.createElement('li');
    newTask.textContent = newTaskText;
    taskList = document.getElementById('lista');
    taskList.appendChild(newTask);
    taskInput.value = " "
      }
}
