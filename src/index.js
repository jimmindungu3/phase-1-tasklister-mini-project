
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("create-task-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const taskDescription = document.getElementById("new-task-description").value;
  
      const taskList = document.getElementById("tasks");
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;
      taskList.appendChild(listItem);
  

      document.getElementById("new-task-description").value = "";
    });
  });
  