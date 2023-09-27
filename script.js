document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Función para agregar una nueva tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-complete">&#10003;</span>
                <span class="task-text">${taskText}</span>
                <span class="task-delete">&#10005;</span>
            `;
            
            // Marcar como completada
            listItem.querySelector(".task-complete").addEventListener("click", function () {
                listItem.classList.toggle("completed");
            });
            
            // Eliminar tarea
            listItem.querySelector(".task-delete").addEventListener("click", function () {
                listItem.remove();
            });
            
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    // Agregar tarea cuando se presione el botón "Agregar"
    addTaskButton.addEventListener("click", addTask);

    // Agregar tarea cuando se presione Enter en el campo de entrada
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
