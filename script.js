function addTask(){

let input = document.getElementById("taskInput")
let taskText = input.value

if(taskText === "") return

let li = document.createElement("li")
li.textContent = taskText

let button = document.createElement("button")
button.textContent = "Eliminar"

button.onclick = function(){
li.remove()
}

li.appendChild(button)

document.getElementById("taskList").appendChild(li)

input.value = ""
}
