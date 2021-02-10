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

todoBtn.addEventListener('click',todoSubmit);
todoList.addEventListener('click',deleteCheck)


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
   completeBtn.innerHTML = '<i class="fas fa-check"></i>';
   completeBtn.classList.add('complete-btn')
   todoDiv.appendChild(completeBtn);
   //
   const trashedBtn = document.createElement('button');
   trashedBtn.classList.add('trash-btn');
   trashedBtn.innerHTML = '<i class="fas fa-trash"></i>';
   todoDiv.appendChild(trashedBtn);
   //
   todoList.appendChild(todoDiv)
    todoInput.value = ""
};


function deleteCheck(e){
    let item = e.target
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('checked')
    }
}