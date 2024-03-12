var myTask = {
    taskName: "test",
    priority: "Low",
    status: "Done",
    deadline: 1231231231231
}

const addTaskBut = document.querySelector("#add-task");
addTaskBut.addEventListener("click", () => addTask(myTask));

const tasks = document.querySelector("#task-table");

function addTask(task) {
    var taskName = document.createElement("td");
    taskName.innerHTML = task.taskName;
    var priority = document.createElement("td");
    priority.innerHTML = task.priority;
    var status = document.createElement("td");
    status.innerHTML = task.status;
    var deadline = document.createElement("td");
    deadline.innerHTML = task.deadline;
    var row = document.createElement("tr");
    row.append(taskName, priority, status, deadline);
    tasks.append(row);
}

const readTasksBut = document.querySelector("#read-tasks");
readTasksBut.addEventListener("click", () => readTasks());
async function readTasks() {
    const taskList = await fetch("http://localhost:8083/tasks").then(data => data.json());
    for(var task of taskList) {
        addTask(task)
    }
}