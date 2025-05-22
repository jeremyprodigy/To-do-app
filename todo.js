const inputBox = document.getElementById('input-box');
const addTask = document.getElementById('add-task')
const taskContainer = document.querySelector('.task-container');

let storedNotes = localStorage.getItem('to-do');
if(storedNotes){
    taskContainer.innerHTML = storedNotes;
    taskButtonFunction(doneTask,deleteTask,task)
}

inputBox.setAttribute('placeholder','Enter your task')

addTask.addEventListener('click', addTaskContainer)

function taskButtonFunction(btn1,btn2,container){
    btn1.addEventListener('click', () => {
        container.style.textDecoration = 'line-through';
        localStorage.setItem('to-do',JSON.stringify(taskButtonFunction))
    })
    btn2.addEventListener('click', (e) => {
        container.remove();
        btn1.remove();
        btn2.remove();
        localStorage.setItem('to-do-btns',JSON.stringify(taskButtonFunction))
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
        deleteTask.innerHTML = "&#128465;";
        taskContainer.append(doneTask,deleteTask);
        localStorage.setItem('to-do', taskContainer.innerHTML)
        inputBox.value = "";
        taskButtonFunction(doneTask,deleteTask,task);
        console.log(typeof taskContainer.innerHTML);
        
    }
    
}


function accessButtons(btn1,btn2,task){
    const tasks = document.querySelector(".task");
    const doneButton = document.querySelector(".donee-task");
    const deleteButton = document.querySelector(".delete-task");
    taskButtonFunction(doneButton,deleteButton,task)
}



















































