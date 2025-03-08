const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const apagarTarefa = document.querySelector('.apagar');


function criaLi() {
  const li = document.createElement('li');
  return li;
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", " ").trim();
    listaTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function criaBtnLi(li) {
  li.innerHTML += " ";
  const liBtn = document.createElement('button')
  liBtn.innerHTML = "Apagar";
  liBtn.setAttribute('class', 'apagar')
  li.appendChild(liBtn);
}

function addTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBtnLi(li);
  salvarTarefas();
}

function limpaInput () {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function addTarefasSalvas () {
  const tarefas = localStorage.getItem("tarefas");
  const listaTarefas = JSON.parse(tarefas);

  for (let tarefa of listaTarefas) {
    addTarefa(tarefa);
  }
}
addTarefasSalvas();

inputTarefa.addEventListener('keypress', function(e){
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    addTarefa(inputTarefa.value);
    limpaInput();
 
  }
});


btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value ) return;
  addTarefa(inputTarefa.value);
  limpaInput();
 
});

document.addEventListener("click", function(e){
  const el = e.target;
  
  if (el.classList.contains("apagar")){
    el.parentElement.remove();
    salvarTarefas();
  }
})

