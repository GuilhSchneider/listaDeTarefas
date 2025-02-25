if (localStorage.getItem("Contador") === null) {
    localStorage.setItem("Contador", 0);
}

function registerTask() {
    var tarefa = document.getElementById('inputTask').value;
    var tarefasContagem = parseInt(localStorage.getItem("Contador"));
    tarefasContagem++;
    localStorage.setItem("Tarefa" + tarefasContagem, tarefa);
    localStorage.setItem("Contador", tarefasContagem);

    showTask()
}

function showTask() {
    var divElements = document.getElementById("ListTask");
    divElements.innerHTML = '';
    var tarefasContagem = parseInt(localStorage.getItem("Contador"));
    for (let i = 1; i <= tarefasContagem; i++) {
        var tarefa = localStorage.getItem("Tarefa" + i);
        if (tarefa) {
            var newElement = document.createElement("p");
            newElement.innerHTML = i + " " + tarefa;
            divElements.appendChild(newElement);
        }
    }
}

function deleteTaskNumber() {
    var tarefaNumero = document.getElementById("inputNumber").value;
    var tarefasContagem = parseInt(localStorage.getItem("Contador"));
    var tarefa = localStorage.getItem("Tarefa" + tarefaNumero);

    if (tarefa && tarefaNumero <= tarefasContagem) {
        localStorage.removeItem("Tarefa" + tarefaNumero);
        for (let i = parseInt(tarefaNumero) + 1; i <= tarefasContagem; i++) {
            var tarefaTemp = localStorage.getItem("Tarefa" + i);
            if (tarefaTemp) {
                localStorage.setItem("Tarefa" + (i - 1), tarefaTemp);
                localStorage.removeItem("Tarefa" + i);
            }
        }
        tarefasContagem--;
        localStorage.setItem("Contador", tarefasContagem);
        showTask();
    } else {
        alert("Tarefa não encontrada ou número inválido!");
    }
}

function deleteTask(){
    localStorage.clear()
    location.reload()
}