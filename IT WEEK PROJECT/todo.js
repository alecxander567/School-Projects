document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('input');
    const addTask = document.getElementById('addTask');
    const container = document.getElementById('container');

    function saveTask(){
        const tasks = [];
        container.querySelectorAll('li').forEach(task => {
            const text = task.textContent.replace('Delete', '').trim(); 
            const completed = task.querySelector('input').checked; 
            tasks.push({ text, completed });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }

    function addMyTask(text, completed = false){
        if(text === "") return; 

        const task = document.createElement('li');
        task.id = 'mytask';
        task.textContent = text; 

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.id = 'checker';
        check.checked = completed; 

        const del = document.createElement('button');
        del.id = 'btndel';
        del.classList = 'delBtn';
        del.innerHTML = '<img src="img/delete.png" style="width: 30px; height: 30px;">';

        task.prepend(check);
        task.prepend(del);
        container.appendChild(task);

        saveTask(); 

        input.value = ""; 

        check.addEventListener('change', () => {
            task.classList.toggle('markDone', check.checked);
            saveTask();
        });

        del.addEventListener('click', () => {
            task.remove();
            saveTask();
        });

        if (completed) {
            task.classList.add('markDone');
        }
    }

    addTask.addEventListener('click', () => {
        if(input.value !== "") {
            addMyTask(input.value); 
        }
    });

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskObj => addMyTask(taskObj.text, taskObj.completed)); 
    }

    loadTasks(); 

});
