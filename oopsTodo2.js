const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const list = document.querySelector("[data-lists]");
let todoArr = localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) :[];

const submitHandler = (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        alert("Hi Boss Input field Add Something!")
    } else {
        const id = new Date().getTime().toString();
        const todolist = new TodoList(id, input.value)
        todoArr = [...todoArr, todolist];
        localStorage.setItem("todolist", JSON.stringify(todoArr));
        UI.displayData()
        UI.clearData();
    }
    console.log(todoArr)
}

class TodoList {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}
const removeHandler = (id) => {
    const filterData = todoArr.filter((ele) => ele.id !== id);
    todoArr = filterData;
    localStorage.setItem("todolist", JSON.stringify(todoArr));
    UI.displayData()
}
class UI {
    static displayData() {
        const MapData = todoArr.map((item) => {
            return ` <div class="todo">
                     <p>${item.todo}</p>
                     <span class="remove" id="${item.id}" onclick="removeHandler('${item.id}')">🗑️</span>
                    </div>`
        })
        list.innerHTML = MapData.join('')
    }
    static clearData() {
        input.value = "";
    }

}

UI.displayData()