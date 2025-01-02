const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const toDos = []; 

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));//로컬 스토리지에 저장되는 toDos의 값을 string 갑승로 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 
    toDos.push(newToDo); 
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);