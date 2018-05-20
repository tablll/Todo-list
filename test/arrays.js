
    
var todolist = [];

var question = prompt("What you wanna do");


while (question !== "quit") {


if (question === "new") {
    var newTodo = prompt("Write a todo");
    todolist.push(newTodo);
    }
    
else if (question === "list") {
        console.log(todolist);
    }
    
question = prompt("What you wanna do");   

}

console.log("Bye");
