
const form  = document.getElementById('toDoForm');
const input = document.getElementById('taskInput');
const list  = document.getElementById('tasks');

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#tasks li').forEach(li => {
        tasks.push({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = createTaskElement(task.text);
        if (task.completed) {
            li.classList.add('completed');
            li.querySelector('input[type="checkbox"]').checked = true;
        }
        list.appendChild(li);
    });
}

function createTaskElement(text) {
    const li = document.createElement('li');
    li.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    const del = document.createElement('button');
    del.classList.add('delete');
    del.textContent = 'Delete';

    li.append(checkbox, span, del);
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    if (text === '') return;
    const item = createTaskElement(text);
    list.appendChild(item);
    input.value = '';
    saveTasks(); 
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        form.dispatchEvent(new Event('submit')); 
    }
});

list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const li = target.parentElement;
        if (target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        saveTasks(); 
    }

    if (target.tagName === 'BUTTON' && target.classList.contains('delete')) {
        target.parentElement.remove();
        saveTasks(); 
    }
});

document.addEventListener('DOMContentLoaded', loadTasks);
