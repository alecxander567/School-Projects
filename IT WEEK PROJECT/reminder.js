document.addEventListener('DOMContentLoaded', function () {
    const contRemin = document.getElementById('cont-remin');
    const input = document.getElementById('input3');
    const date = document.getElementById('date');
    const btnAddRemin = document.getElementById('btn-remin');

    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];

    function saveReminders() {
        localStorage.setItem('reminders', JSON.stringify(reminders));
    }

    function displayReminders() {
        contRemin.innerHTML = ''; 

        reminders.forEach((reminder, index) => {
            const itemList = document.createElement('li');
            itemList.classList = 'reminders';

            itemList.innerHTML = `
                <span>${reminder.text} - ${reminder.date}</span>
                <button class="btn-edit" data-index="${index}">
                    <img src="img/edit.png" class="icon">
                </button>
                <button class="btn-delete" data-index="${index}">
                    <img src="img/delete.png" class="icon">
                </button>
            `;

            contRemin.appendChild(itemList);
        });

        const editButtons = document.querySelectorAll('.btn-edit');
        const deleteButtons = document.querySelectorAll('.btn-delete');

        editButtons.forEach(button =>
            button.addEventListener('click', handleEdit)
        );

        deleteButtons.forEach(button =>
            button.addEventListener('click', handleDelete)
        );
    }

    btnAddRemin.addEventListener('click', function () {
        const reminderText = input.value.trim();
        const reminderDate = date.value;

        if (reminderText && reminderDate) {
            const reminder = { text: reminderText, date: reminderDate };
            reminders.push(reminder);

            saveReminders();
            displayReminders();

            input.value = '';
            date.value = '';
        } else {
            alert('Please provide both a reminder and a date.');
        }
    });

    function handleEdit(event) {
        const index = event.currentTarget.getAttribute('data-index');
        const reminder = reminders[index];

        input.value = reminder.text;
        date.value = reminder.date;

        reminders.splice(index, 1);

        saveReminders();
        displayReminders();
    }

    function handleDelete(event) {
        const index = event.target.getAttribute('data-index');

        reminders.splice(index, 1);

        saveReminders();
        displayReminders();
    }

    function checkReminders() {
        const today = new Date().toISOString().split('T')[0];

        reminders.forEach((reminder, index) => {
            if (reminder.date === today) {
                alert(`Reminder: ${reminder.text}`);

                reminders.splice(index, 1);
                saveReminders(); 
            }
        });

        displayReminders();
    }

    displayReminders();

    setInterval(checkReminders, 10000);
});
