function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
