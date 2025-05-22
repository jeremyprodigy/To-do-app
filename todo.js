// const inputBox = document.getElementById('input-box');
// const addTask = document.getElementById('add-task')
// const taskContainer = document.querySelector('.task-container');

// inputBox.setAttribute('placeholder','Enter your task')

// addTask.addEventListener('click', addTaskContainer)

// function taskButtonFunction(btn1,btn2,container){
//     btn1.addEventListener('click', () => {
//         container.style.textDecoration = 'line-through';
//     })
//     btn2.addEventListener('click', (e) => {
//         container.remove();
//         btn1.remove();
//         btn2.remove();
//     })
// }

// function addTaskContainer(){
//     if (inputBox.value === '') {
//         alert('Please enter a task :)';
//         alert("You know it is no that hard bruv")
//         // addTask.removeEventListener('click', addTaskContainer)
//     }else {
//         console.log('I am active')
//         const taskValue = inputBox.value;
//         const task = document.createElement('div');
//         task.className = 'task';
//         task.textContent = taskValue;
//         taskContainer.appendChild(task)
//         const doneTask = document.createElement('button');
//         const deleteTask = document.createElement('button');
//         doneTask.className = 'done-task';
//         doneTask.innerHTML = "&checkmark;";
//         deleteTask.className = 'delete';
//         deleteTask.innerHTML = "&#128465;";
//         taskContainer.append(doneTask,deleteTask);
//         localStorage.setItem('to-do', taskContainer.innerHTML)
//         inputBox.value = "";
//         taskButtonFunction(doneTask,deleteTask,task);
//         console.log(typeof taskContainer.innerHTML);
        
//     }
    
// }


const inputBox = document.getElementById('input-box');
const addTask = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');

inputBox.setAttribute('placeholder', 'Enter your task');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks and re-render the task list
function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Render all tasks to the DOM
function renderTasks() {
  taskContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.textContent = task.text;
    if (task.done) {
      taskDiv.style.textDecoration = 'line-through';
    }

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-task';
    doneBtn.innerHTML = '&checkmark;';
    doneBtn.addEventListener('click', () => {
      tasks[index].done = !tasks[index].done;
      saveAndRender();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '&#128465;';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveAndRender();
    });

    taskContainer.appendChild(taskDiv);
    taskContainer.appendChild(doneBtn);
    taskContainer.appendChild(deleteBtn);
  });
}

// Add a new task
function addTaskContainer() {
  const value = inputBox.value.trim();
  if (value === '') {
    alert('Please enter a task :)');
    return;
  }

  tasks.push({ text: value, done: false });
  inputBox.value = '';
  saveAndRender();
}

// Initial setup
addTask.addEventListener('click', addTaskContainer);
renderTasks();



















































