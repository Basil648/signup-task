 var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var filterBtns = document.getElementsByClassName("filter-btn");

var tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  showTasks("all");
}

addBtn.onclick = function () {
  var text = taskInput.value;
  if (text.trim() !== "") {
    var newTask = { text: text, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    saveTasks();
    showTasks("all");
  }
};

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks(filter) {
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    if (filter === "active" && tasks[i].completed) continue;
    if (filter === "completed" && !tasks[i].completed) continue;

    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    var span = document.createElement("span");
    span.innerText = tasks[i].text;
    if (tasks[i].completed) {
      span.classList.add("completed");
    }

    span.onclick = (function (index) {
      return function () {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        showTasks(filter);
      };
    })(i);

    var del = document.createElement("button");
    del.innerText = "×";
    del.className = "delete-btn";
    del.onclick = (function (index) {
      return function () {
        tasks.splice(index, 1);
        saveTasks();
        showTasks(filter);
      };
    })(i);

    li.appendChild(span);
    li.appendChild(del);
    taskList.appendChild(li);
  }
}

for (var j = 0; j < filterBtns.length; j++) {
  filterBtns[j].onclick = function () {
    for (var k = 0; k < filterBtns.length; k++) {
      filterBtns[k].classList.remove("active");
    }
    this.classList.add("active");
    var filterType = this.getAttribute("data-filter");
    showTasks(filterType);
  };
}
