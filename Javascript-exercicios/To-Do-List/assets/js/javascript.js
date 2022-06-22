const form = document.getElementById('list');
const taskList = document.getElementById('tasks');

/* Envia o conteúdo no campo de input para tarefas*/
form.onsubmit = function (prev) {
	prev.preventDefault();
	const input = document.getElementById('task-input');
	Task(input.value); //função + valor do input acima.
};

/*Cria os elementos */
function Task(description) {
	const taskContainer = document.createElement('div');
     /* Cria div*/
	const newTask = document.createElement('input'); 
    /* Cria checkbox */
	const taskLabel = document.createElement('label'); 
    /* Cria um elemento */
	const taskDescriptionNode = document.createTextNode(description);
     /* Cria um nó de texto para um elemento*/

	newTask.setAttribute('type', 'checkbox'); /* Altera atributo do elemento*/
	newTask.setAttribute('name', description); 
	newTask.setAttribute('id', description); 

	taskLabel.setAttribute('for', description); /* Altera atributo do elemento*/
	taskLabel.appendChild(taskDescriptionNode); /* Anexa nó de texto a label */

	taskContainer.classList.add('task-item'); /* Adiciona classe no elemento*/
	taskContainer.appendChild(newTask); /* Inclui um elemento no outro */
	taskContainer.appendChild(taskLabel); 

	taskList.appendChild(taskContainer); /* Inclui um elemento no outro */
}
