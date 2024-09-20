const input = document.querySelector('.input');
const submitBtn = document.querySelector('.button');
const notCompleted = document.querySelector('.notCompleted');
const Completed = document.querySelector('.Completed');

submitBtn.addEventListener('click', addTodos);

input.addEventListener('keyup', (e) => {
    e.keyCode === 13 ? addTodos(e) : null
})

function addTodos() {
    let checkBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    let newLi = document.createElement('li')
    checkBtn.innerHTML = 'check'
    deleteBtn.innerHTML = 'delete'

    if (input.value !== '') {
        newLi.innerHTML = input.value;
        input.value = '';
        // newLi.appendChild('checkBtn');
        // newLi.appendChild('deleteBtn');

        // notCompleted.appendChild(newLi)

        newLi.appendChild(checkBtn)
        newLi.appendChild(deleteBtn)


        notCompleted.appendChild(newLi)
    }

    checkBtn.addEventListener('click', checkTodo);
    deleteBtn.addEventListener('click', deleteTodo);

    function checkTodo() {
        const parent = this.parentNode;
        parent.remove();
        checkBtn.style.display = 'none';
        Completed.appendChild(parent);
    }

    function deleteTodo() {
        const parent = this.parentNode;
        parent.remove();
    }

  

}