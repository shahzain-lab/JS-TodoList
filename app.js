/*
=============
Selector
=============
*/
const todoBtn = document.querySelector('.todoBtn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoSelect = document.querySelector('.filter-todo');

/*
=============
Event-Listener
=============
*/

todoBtn.addEventListener('click', todoSubmit);
todoList.addEventListener('click', deleteCheck)
todoSelect.addEventListener('click', filterTodo)
/*
=============
Functions
=============
*/

function todoSubmit(e){
    //prevent from submiting
    e.preventDefault();

    //
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);
    //
    const todoItem = document.createElement('li');
    todoItem.innerHTML = todoInput.value;
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);
    //
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"><i/>';
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn);
    //
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"><i/>';
    deleteBtn.classList.add('trash-btn');
    todoDiv.appendChild(deleteBtn)

    //update value
    todoInput.value = ""
};

function deleteCheck(e){
    const item = e.target;
    //delete
    if(item.classList.contains('trash-btn')){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
    //check
    if(item.classList.contains('complete-btn')){
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
};


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch(e.target.value){
            case 'all':
                todo.style.display = "flex";
                break;
                case 'completed':
                    if(todo.classList.contains('checked')){
                        todo.style.display = "flex"
                    }else{
                        todo.style.display = "none"
                    }
                     break;
                    case 'uncompleted':
                        if(!todo.classList.contains('checked')){
                            todo.style.display = "flex"
                        } else {
                            todo.style.display = "none"
                        }
                        break;
        }
    })
}
