document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    var inputValue = document.querySelector('.js--form__input').value;
    if (inputValue.trim() !== '') {
        var todosWrapper = document.querySelector('.js--todos-wrapper');
        var newTask = document.createElement('li');
        newTask.className = 'todo-item';
        newTask.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span class="todo-item__description">${inputValue}</span>
            <button class="todo-item__delete" onclick="deleteTask(this)">Видалити</button>
        `;
        todosWrapper.appendChild(newTask);

        saveTasksToSessionStorage();
        document.querySelector('.js--form__input').value = '';
    }
}

function deleteTask(element) {
    element.parentElement.remove();
    saveTasksToSessionStorage();
}

function toggleTask(checkbox) {
    var taskDescription = checkbox.nextElementSibling;
    taskDescription.classList.toggle('completed', checkbox.checked);
    saveTasksToSessionStorage();
}

function saveTasksToSessionStorage() {
    var todosWrapper = document.querySelector('.js--todos-wrapper');
    var tasks = todosWrapper.querySelectorAll('.todo-item');
    var tasksArray = [];

    tasks.forEach(function (task) {
        var taskDescription = task.querySelector('.todo-item__description').innerText;
        var isCompleted = task.querySelector('input[type="checkbox"]').checked;

        tasksArray.push({ description: taskDescription, completed: isCompleted });
    });

    sessionStorage.setItem('tasks', JSON.stringify(tasksArray));
}

function loadTasks() {
    var todosWrapper = document.querySelector('.js--todos-wrapper');
    var storedTasks = sessionStorage.getItem('tasks');

    if (storedTasks) {
        var tasksArray = JSON.parse(storedTasks);

        tasksArray.forEach(function (task) {
            var newTask = document.createElement('li');
            newTask.className = 'todo-item';
            newTask.innerHTML = `
                <input type="checkbox" onchange="toggleTask(this)" ${task.completed ? 'checked' : ''}>
                <span class="todo-item__description ${task.completed ? 'completed' : ''}">${task.description}</span>
                <button class="todo-item__delete" onclick="deleteTask(this)">Видалити</button>
            `;
            todosWrapper.appendChild(newTask);
        });
    }
}
