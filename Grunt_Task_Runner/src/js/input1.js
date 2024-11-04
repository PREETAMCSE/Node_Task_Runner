const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});