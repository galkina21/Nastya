document.getElementById("mainLink").addEventListener("click", function () {
    const link = prompt("введіть посилання:");
    if (link) {
        localStorage.setItem("nextLink", link);
    }
});
document.getElementById("next").addEventListener("click", function () {
    const nextLink = localStorage.getItem("nextLink");
    if (nextLink) {
        window.location.href = nextLink;
    } 
});



const buttonscontainer = document.body;
buttonscontainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        alert(`клікнуто на кнопці: ${event.target.textContent}`);
    }
});



const todo = document.getElementById("todo");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `
            ${taskText}
            <button class="deleteTask">Видалити</button>
        `;
        todo.appendChild(newTaskItem);
        newTaskInput.value = "";
    }
});
todo.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteTask")) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }
});