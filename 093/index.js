"use strict";
const tasks = [ 
    { 
        id: '1138465078061', 
        completed: false, 
        text: 'Посмотреть новый урок по JavaScript', 
    },
    {
        id: '1138465078062', 
        completed: false, 
        text: 'Выполнить тест после урока', 
    },
    { 
        id: '1138465078063', 
        completed: false, 
        text: 'Выполнить ДЗ после урока', 
    }, 
]
const createTaskItem = ((taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'chechbox-form';
    taskItemMainContent.append(checkboxForm);

    const inputCheckBox = document.createElement('input');
    inputCheckBox.className = 'checkbox-form__checkbox';
    inputCheckBox.type = 'checkbox';
    const inputId = `task${taskId}`;
    inputCheckBox.id = taskId;

    const labelCheckBox = document.createElement('label');
    labelCheckBox.htmlFor = inputId;

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckBox, labelCheckBox);
    taskItemMainContainer.append(taskItemMainContent);

    return taskItem;
});

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});


