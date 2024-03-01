const Form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const list = document.querySelector("[data-lists]");
let todoArr = []

const submitHandler = (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        // Show an alert or display a message on the page
        alert("Nothing in the todo list, add something.");
    } else {
        const id = Math.floor(Math.random() * 1000);
        const todo = new TodoList(id, input.value);
        todoArr = [...todoArr, todo];
        UI.clearInput();
        UI.displayData();
    }
}
class TodoList {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}
class UI {
    static displayData() {
        let displayData = todoArr.map((ele) => {
            return `
       <div class="todo">
       <p>${ele.todo} </p>
       <span class="remove" onclick="removeHandler(${ele.id})">🗑️</span>
       </div>
     `
        })
        list.innerHTML = displayData.join("")
    }
    static clearInput() {
        input.value = ""
    }
    static removeTodo(id) {
        todoArr = todoArr.filter((ele) => ele.id !== id);
        UI.displayData(); 
    }
}
const removeHandler = (id) =>{
 UI.removeTodo(id)
}