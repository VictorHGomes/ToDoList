const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
let minhaListaDeItens = []
const listaCompleta = document.querySelector('.list-tasks')
function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach((item) => {
        novaLi =  novaLi  + `
    <li class="task">
        <img src="images/checked.png" alt="task-done">
        <p>${item}</p>
        <img src="images/trash.png" alt="task-removed">
    </li>
    `
    })
    listaCompleta.innerHTML = novaLi
}

button.addEventListener('click', adicionarNovaTarefa)