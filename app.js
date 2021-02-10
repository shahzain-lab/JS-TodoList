/*
=============
Selector
=============
*/
const todoBtn = document.querySelector('.todoBtn');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');


/*
=============
Event-Listener
=============
*/

todoBtn.addEventListener('click',todoSubmit );


/*
=============
Function
=============
*/
function todoSubmit(e){
    //prevent from submitting
    e.preventDefault();


    //creating dynamic list
    let li = document.createElement('li');
    li.innerText = todoInput.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    let comBtn = document.createElement('button');
    comBtn.innerHTML = '<i class="fas fa-check"></i>'
    li.appendChild(deleteBtn);
    li.appendChild(comBtn);
    todoList.appendChild(li);
    todoInput.value = ""
};
