const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}