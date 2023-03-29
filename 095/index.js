'use strict';
// Вы молодец! Вы справились с задачей и отдали ее на код-ревью старшему разработчику.
//  Но старший разработчик обнаружил, что не нужно отправлять форму, если значение
//  пустое либо задача с таким же названием уже существует. Поэтому вас просят
//  добавить валидацию в ваш код. Для блока с ошибкой создавайте тег span с классом
//   “error-message-block”. Внутрь данного тега будет помещаться текст с ошибкой.
//   Если форма была отправлена с пустым полем, то отобразите ошибку “Название задачи
//    не должно быть пустым”, добавив блок с ошибкой в форму с классом
//    “create-task-block”. Если же задача с введенным в поле названием уже существует,
//     то отображайте ошибку “Задача с таким названием уже существует.”
// Если при отправке формы ошибок не было найдено, то удалите блок с ошибкой, если
// он существует в DOM, и создайте новую задачу в списке.
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
];
const createTaskItem = (taskId, taskText) => {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';
  taskItem.dataset.taskId = taskId;

  const taskItemMainContainer = document.createElement('div');
  taskItemMainContainer.className = 'task-item__main-container';

  const taskItemMainContent = document.createElement('div');
  taskItemMainContent.className = 'task-item__main-content';

  taskItem.append(taskItemMainContainer);
  taskItemMainContainer.append(taskItemMainContent);

  const checkboxForm = document.createElement('form');
  checkboxForm.className = 'checkbox-form';

  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.className = 'checkbox-form__checkbox';
  const inputId = `task-${taskId}`;
  inputCheckbox.id = inputId;

  const labelCheckbox = document.createElement('label');
  labelCheckbox.htmlFor = inputId;

  const taskItemText = document.createElement('span');
  taskItemText.className = 'task-item__text';
  taskItemText.innerText = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className =
    'task-item__delete-button default-button delete-button';
  deleteButton.innerText = 'Удалить';

  taskItemMainContent.append(checkboxForm, taskItemText);
  checkboxForm.append(inputCheckbox, labelCheckbox);
  taskItemMainContainer.append(deleteButton);

  return taskItem;
};

const createErrorBlock = (errorMessage) => {
  const errorBlock = document.createElement('span');
  errorBlock.textContent = errorMessage;
  errorBlock.className = 'error-message-block';
  return errorBlock;
};

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskText = (event.target.taskName.value || '').trim();
  const isTaskExists = tasks.some((task) => task.text === newTaskText);
  const errorMessageBlockFromDOM = createTaskForm.querySelector(
    '.error-message-block'
  );
  if (!newTaskText) {
    const errorBlock = createErrorBlock(
      'Название задачи не должно быть пустым'
    );
    createTaskForm.append(errorBlock);
  } else if (isTaskExists) {
    const errorBlock = createErrorBlock(
      'Задача с таким названием уже существует'
    );
    createTaskForm.append(errorBlock);
  } else if (newTaskText && !isTaskExists) {
    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
    };
    tasks.push(newTask);
    const taskItem = createTaskItem(newTask.id, newTask.text);
    tasksListContainer.append(taskItem);
  }
  if (errorMessageBlockFromDOM) {
    errorMessageBlockFromDOM.remove();
  }
});

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
  const taskItem = createTaskItem(task.id, task.text);
  tasksListContainer.append(taskItem);
});
