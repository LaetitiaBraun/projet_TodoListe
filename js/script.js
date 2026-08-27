const checkboxes = document.querySelectorAll(".todo-check");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.textDecoration = "line-through";
      console.log("Tâche terminée !");
    } else {
      this.parentElement.style.textDecoration = "none";
      console.log("Tâche non terminée");
    }
  });
});