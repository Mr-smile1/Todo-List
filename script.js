
// this is an another approach to store data in ram such that if the browser
// is closed and opened again the data will remain in the remain there


// Global Variables
let inpTasks = document.getElementById('inpTasks');
let btnAdd = document.getElementById('btnAdd');
let taskList = document.getElementById('taskList');
let btnClear = document.getElementById('btnClear');
let btnClearInput = document.getElementById('btnClearInput');


let tasks = [];                                             // retrieve empty task list 

function saveTaskList(){                                    // saving task in memory
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function retrieveList() {                                   // retrieve the task list from memory
    let retrievedTasks = localStorage.getItem("tasks");
    if (retrievedTasks) {                                   // if there is any data in local storage
        tasks = JSON.parse(retrievedTasks);
    }
}

function clearTaskList() {                                  // clear the task list
    tasks = [];
    renderTaskList();                                       // render the task list
    saveTaskList();                                         // saving task in memory
}

function renderTaskList(){                                  // go through the list and show the string values
    taskList.innerHTML = "";                                // clear the task list, as it will again print privesly printed values
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerText = tasks[i];
        taskList.appendChild(li);
    }
}

function addTask() {                                         // add task to the list
    let task = inpTasks.value;
    tasks.push(task);
    renderTaskList();
    saveTaskList();                                          // saving task in memory
}

function clearInputField(){                                  // clear the input field for current input
    inpTasks.value = "";
}


btnAdd.onclick = function () {                               // connecting btn onclick to addTask();
    addTask();
}

btnClear.onclick = function () {                             // connecting btn onclick to clearTaskList();
    clearTaskList();
}

btnClearInput.onclick = function () {                        // connecting btn onclick to clearInputField();
    clearInputField();
}

/* checkbox code not working

function checkBox() {                                        // checkbox functionality
    let checkBox = document.getElementById('input');
        checkBox.type = "checkbox";
        checkBox.value = 1;
        checkBox.name = "tasks[]";
        taskList.appendChild(checkBox);
}
*/

retrieveList();                                              // retrieve the task list from memory
renderTaskList();                                            // render the task list from memory