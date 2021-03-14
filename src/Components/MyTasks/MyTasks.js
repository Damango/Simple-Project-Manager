import React, { useState, useEffect } from 'react';
import "./MyTasks.css"
import MyTask from "./MyTask/MyTask"
const MyTasks = (props) => {

    const [tasks, setTasks] = useState(props.tasks)
    const [counter, setCounter] = useState(0);
    const [newTask, setNewTask] = useState(1);
    const [addingTask, setAddingTask] = useState(0)










    function renderNewTask() {
        if (newTask === 1) { return (<button className="add-my-task-button" onClick={() => { setNewTask(0) }}>Add Task +</button>) }


        else {
            return (
                <div className="enter-task-container"><input className="my-task-input" placeholder="Enter Task Text" autoFocus={true} /><button className="submit-button" onClick={addTask}>Submit</button><button className="my-cancel-button" onClick={() => { setNewTask(1) }}>Cancel</button></div>)
        }
    }



    function addTask() {

        let storage = JSON.parse(localStorage.getItem('projectmanager'))

        let taskInput = document.querySelector('.my-task-input').value;
        let newTask = {
            text: taskInput,
            ID: storage.myTasks.length,
            date: "March 14th"
        }

        let newList = tasks;
        newList.push(newTask)
        setTasks(newList);
        storage.myTasks = tasks;
        localStorage.setItem('projectmanager', JSON.stringify(storage));
        setCounter(counter + 1)
        setNewTask(1)
    }


    return (<div className="my-tasks-container">


        <div className="my-tasks-wrapper">

            {tasks.map((task) => <MyTask data={task} updateTasks={setTasks} length={JSON.parse(localStorage.getItem('projectmanager')).myTasks.length} />)}

            <div className="add-my-task-container">
                {renderNewTask()}
            </div>





        </div>



    </div>);
}

export default MyTasks;