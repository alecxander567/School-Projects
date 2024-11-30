document.addEventListener('DOMContentLoaded', function() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    function initializeTaskManager(inputId, addTaskId, containerId) {
        const input = document.getElementById('input2');
        const addTask = document.getElementById('addTask2');
        const container = document.getElementById('container2');
        const myTime = document.getElementById('time');
        
        function saveTask() {
            const tasks = [];
            container.querySelectorAll('li').forEach(task => {
                const text = task.querySelector('.task-text').textContent.trim();  
                const time = task.querySelector('.task-time').textContent.trim();
                const completed = task.querySelector('input').checked;
                tasks.push({ text, time, completed });
            });
            
            localStorage.setItem(containerId, JSON.stringify(tasks));
        }

        function addMyTask(text, time, completed = false) {
            if(text === "" || time === "") return;

            const task = document.createElement('li');
            task.id = 'mytask';
            
            const taskText = document.createElement('span');
            taskText.classList.add('task-text');
            taskText.textContent = text;

            const taskTime = document.createElement('span');
            taskTime.classList.add('task-time');
            
            if (!time.startsWith("(") && !time.endsWith(")")){
                time =`(${time})`;
            }
            
            taskTime.textContent = time;

            const check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'checker';
            check.checked = completed;

            const del = document.createElement('button');
            del.id = 'btndel';
            del.classList = 'delBtn2';
            del.innerHTML = '<img src="img/delete.png" style="width: 30px; height: 30px;">';

            task.appendChild(check);
            task.appendChild(taskText);
            task.appendChild(taskTime); 
            task.appendChild(del);
            container.appendChild(task);

            saveTask();

            input.value = "";
            myTime.value = "";
            
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

        function scheduleNotification(taskTime, taskText) {
            const now = new Date();
            const taskDate = new Date(now);
            const [hour, minute] = taskTime.split(':').map(num => parseInt(num));
            
            taskDate.setHours(hour);
            taskDate.setMinutes(minute);
            taskDate.setSeconds(0);
        
            let timeDifference = taskDate - now;
        
            if (timeDifference < 0) {
                taskDate.setDate(taskDate.getDate() + 1);
                timeDifference = taskDate - now; 
            }
       
            setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification(`Reminder: ${taskText} is due now!`);
                } else {
                    alert(`Reminder: ${taskText} is due now!`);
                }
            }, timeDifference);
        }

        if (Notification.permission === 'granted') {
          new Notification(`Reminder : Your ${taskText} is due now`)
        } else if (Notification.permission === 'denied') {
            Notification.requestPermission();
        } 

        const now = new Date();
        now.setMinutes(now.getMinutes() + 1); 
        const taskTime = `${now.getHours()}:${now.getMinutes()}`;

        addTask.addEventListener('click', () => {
            const taskText = input.value;
            const taskTime = myTime.value;

            if (taskText !== "" &&  taskTime !== "") {
                addMyTask(taskText, taskTime);
                scheduleNotification(taskTime, taskText);
            } else {
                alert("Please provide a task and time");
            }            
        });

        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem(containerId)) || [];
            tasks.forEach(task => addMyTask(task.text, task.time, task.completed));
        }

        loadTasks();
    }

    initializeTaskManager('input2', 'addTask2', 'container2');
});
