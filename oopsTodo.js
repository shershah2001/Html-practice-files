const Form = document.querySelector
    ("[data-form]");
const formInput = document.querySelector
    ("[data-input]");
const formData = document.querySelector
    ("[data-lists]");
class Storage{
    static addTodoStorage(todoArr){
        let storage = localStorage.setItem("todo",JSON.stringify(todoArr));
        return storage
    }
    static getStorage(){
        let storage = localStorage.getItem("todo") === null ? []: JSON.parse(localStorage.getItem("todo"));
        return storage;
    }
}
let todoArr = Storage.getStorage();
const submitHandler = (event) => {
    event.preventDefault();
    let id = Math.floor(Math.random() * 10000)
    const todo = new Todo(id, formInput.value)
    todoArr = [...todoArr, todo];
    UI.displayData();
    UI.clearInput();
    Storage.addTodoStorage(todoArr)
}
class Todo {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}
class UI {
    static displayData() {
        let displayData = todoArr.map((item) => {
            return `
               <div class="todo">
               <p>${item.todo}</p>
               <span class="remove" data-id = ${item.id}>🗑️</span>
               </div>
            `
        });
        formData.innerHTML = (displayData).join(" ");
    }
    static clearInput(){
        formInput.value = "";
    }
    static removeTodo(){
        formData.addEventListener("click",(event)=>{
        if(event.target.classList.contains("remove")){
            event.target.parentElement.remove();
        }
        let btnId = event.target.dataset.id;
        UI.removeArrayTodo(btnId);
        })
    }
    static removeArrayTodo(id){
        todoArr = todoArr.filter((item)=> item.id !== id);
        Storage.addTodoStorage(todoArr)
    }
}
window.addEventListener("DOMContentLoaded",()=>{
    UI.displayData();
    UI.removeTodo();
})

