const inputTarefa = document.querySelector("#input-tarefa");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaTarefas = document.querySelector("#lista-tarefas");

botaoAdicionar.addEventListener("click", function () {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-concluida");

    const textoTarefa = document.createElement("span");
    textoTarefa.classList.add("texto-tarefa");
    textoTarefa.textContent = texto;

    span.appendChild(checkbox);
    span.appendChild(textoTarefa);
    li.appendChild(span);

    listaTarefas.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();
});

inputTarefa.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        botaoAdicionar.click();
    }
});

listaTarefas.addEventListener("click", function (evento) {
    const elementoClicado = evento.target;

    if (elementoClicado.classList.contains("checkbox-concluida")) {
        const li = elementoClicado.closest("li");
        li.classList.toggle("concluida");
        return;
    }

    const liClicado = elementoClicado.closest("li");
    if (liClicado) {
        liClicado.remove();
    }
});