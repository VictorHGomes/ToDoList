const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
let minhaListaDeItens = []
const listaCompleta = document.querySelector('.list-tasks')
function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach((item, index) => {
        novaLi =  novaLi  + `
    <li class="task ${item.concluida && "done"}">
        <img src="images/checked.png" alt="task-done" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="images/trash.png" alt="task-removed" onclick= "deletarItem(${index})">
    </li>
    `
    })
    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarNovaTarefa()
    }
})
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()

}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
   
   if(tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
   }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)