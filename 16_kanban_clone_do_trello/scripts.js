const tasks = document.querySelectorAll(".tasks li");
let draggedTask = null;

for (let i = 0; i < tasks.length; i++) {
  const singleTasks = tasks[i];

  singleTasks.addEventListener("dragstart", function (event) {
    draggedTask = singleTasks;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", singleTasks.innerHTML);
    singleTasks.classList.add("dragging");
  });

  singleTasks.addEventListener("dragend", function () {
    draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
}

const columns = document.querySelectorAll(".tasks");

for (let i = 0; i < columns.length; i++) {
  const singleColumn = columns[i];

  singleColumn.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    singleColumn.classList.add("dragover");
  });

  singleColumn.addEventListener("dragleave", function () {
    singleColumn.classList.remove("dragover");
  });

  singleColumn.addEventListener("drop", function (event) {
    event.preventDefault();

    const task = document.createElement("li");
    task.innerHTML = event.dataTransfer.getData("text/html");
    task.setAttribute("draggable", true);
    task.addEventListener("dragstart", function (event) {
      draggedTask = task;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", task.innerHTML);
      task.classList.add("dragging");
    });

    singleColumn.appendChild(task);
    singleColumn.classList.remove("dragover");

    const previousColumn = draggedTask.parentNode;
    previousColumn.removeChild(draggedTask);
  });
}

const addTaskForm = document.querySelector("#add-task-form");
const addTaskInput = document.querySelector("input");

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTaskText = addTaskInput.value.trim();

  if (newTaskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    newTask.setAttribute("draggable", true);
    newTask.addEventListener("dragstart", function (event) {
      draggedTask = newTask;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/html", newTask.innerHTML);
      newTask.classList.add("dragging");
    });
    document.querySelector("#todo").appendChild(newTask);
    addTaskInput.value = "";
  }
});
