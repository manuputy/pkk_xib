document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });

    newTaskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Tambahkan tombol delete ke setiap tugas
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Bisa di delete da";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);

        taskItem.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);
    }
});