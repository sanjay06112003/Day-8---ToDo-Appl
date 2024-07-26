function addtodo() {
    var todo_input = document.getElementById("todo_input");
    var todotext = todo_input.value.trim();

    if (todotext !== "") {
        var li = document.createElement("li");
        li.textContent = todotext;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete_btn");
        deleteButton.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteButton);

        document.getElementById("todo_list").appendChild(li);

        todo_input.value = "";
    }
}