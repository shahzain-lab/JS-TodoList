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
todoList.addEventListener('click', deleteTodo)


/*
=============
Function
=============
*/
function todoSubmit(e){
    //prevent from submitting
    e.preventDefault();


    //creating dynamic list
   
    todoInput.value = ""
};
