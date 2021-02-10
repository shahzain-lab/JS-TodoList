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
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //
   const newTodo = document.createElement('li');
   newTodo.classList.add('todo-item');
   newTodo.innerText = todoInput.value;
   //
   todoDiv.appendChild(newTodo)
   //
   const completeBtn = document.createElement('button');
   completeBtn.innerHTML = '<i class="fa fa-trash"></i>';
   completeBtn.classList.add('complete-btn')
   todoDiv.appendChild(completeBtn);
   //
   const trashedBtn = document.createElement('button');
   trashedBtn.classList.add('trash-btn');
   trashedBtn.innerHTML = '<i class="fas fa-check"></i>';
   todoDiv.appendChild(trashedBtn);
   //
   todoList.appendChild(todoDiv)
    todoInput.value = ""
};
