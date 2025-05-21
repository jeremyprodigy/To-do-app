const inputBox = document.getElementById('input-box');
const addTask = document.getElementById('add-task')
const taskContainer = document.querySelector('.task-container');

inputBox.setAttribute('placeholder','Enter your task')

addTask.addEventListener('click', addTaskContainer)

function taskButtonFunction(btn1,btn2,container){
    btn1.addEventListener('click', () => {
        container.style.textDecoration = 'line-through';
    })
    btn2.addEventListener('click', (e) => {
        container.remove();
        btn1.remove();
        btn2.remove();
    })
}

function addTaskContainer(){
    if (inputBox.value === '') {
        alert('Please enter a task :)');
        alert("You know it is no that hard bruv")
        // addTask.removeEventListener('click', addTaskContainer)
    }else {
        console.log('I am active')
        const taskValue = inputBox.value;
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = taskValue;
        taskContainer.appendChild(task)
        const doneTask = document.createElement('button');
        const deleteTask = document.createElement('button');
        doneTask.className = 'done-task';
        doneTask.innerHTML = "&checkmark;";
        deleteTask.className = 'delete';
        deleteTask.innerHTML = "&#128465;"
        taskContainer.append(doneTask,deleteTask)
        inputBox.value = "";
        taskButtonFunction(doneTask,deleteTask,task);
    }
    
}






















































