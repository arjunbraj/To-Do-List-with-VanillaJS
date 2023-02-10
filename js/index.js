// Get task input
const taskInput = document.getElementById('new-task-txt');

// get the add button
const addBtn = document.getElementsByTagName('button')[0];

// get the incomplete tasks div
const incompleteTasksUl = document.getElementById('incomplete-tasks');

// get the complete tasks div
const completeTasksUl = document.getElementById('complete-tasks');

// create a new task element
const createNewTask = function(taskStr){
    // create a li
    const listItem = document.createElement('li');
    // checkbox
    const checkBox = document.createElement('input');
    // label
    const label = document.createElement('label');
    // delete button
    const deleteBtn = document.createElement('button');

    // updating the specifics for checkbox and del btn
    checkBox.type = 'checkBox';
    deleteBtn.innerHTML = 'X';
    deleteBtn.className = 'delete';
    label.innerText = taskStr;

    // append to li
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    return listItem;
}

// setting up count for tasks
var count = 0;
const countSpan = document.getElementById('count');

// add new task
const addTask = function(){
    console.log('Adding Task ...');
    const listItem = createNewTask(taskInput.value);
    // add the list item to incomplete tasks div
    incompleteTasksUl.appendChild(listItem);
    bindTasks(listItem, taskCompleted);
    taskInput.value = '';
    count++;
    countSpan.innerHTML = count;
}

// deleting a task
const deleteTask = function(){
    console.log('Deleting Task ...');
    // remove the li from ul
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
    count--;
    countSpan.innerHTML = count;
}

// mark task as complete
const taskCompleted = function(){
    console.log('Task Completed ...');
    // append item to completed task div
    const listItem = this.parentNode;
    const label = listItem.getElementsByTagName('label')[0];
    label.style.textDecoration = 'line-through';
    completeTasksUl.appendChild(listItem);
    bindTasks(listItem, taskIncomplete);
}

// mark task as incomplete
const taskIncomplete = function(){
    console.log('Task Incomplete ...');
    // append to incomplete tasks div
    const listItem = this.parentNode;
    const label = listItem.getElementsByTagName('label')[0];
    label.style.textDecoration = 'none';
    incompleteTasksUl.appendChild(listItem);
    bindTasks(listItem, taskCompleted);
}

// adding click listener to add btn
addBtn.addEventListener('click', addTask);

// bind task
const bindTasks = function(taskListItem, checkBoxEventListener){
    // select li children
    const checkBox = taskListItem.querySelector('input[type="checkbox"]');
    const deleteBtn = taskListItem.querySelector('button.delete');
    // delete button onclick
    deleteBtn.onclick = deleteTask;
    // checkbox event
    checkBox.onchange = checkBoxEventListener;
}