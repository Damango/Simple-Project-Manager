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


        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        


        let newTask = {
            text: taskInput,
            ID: Math.floor(Math.random() * 1000),
            date: today
        }

        let allTasks = tasks;
        let newList = tasks.todayTasks;
        newList.push(newTask)
        setTasks(allTasks);
        storage.myTasks = allTasks;
        localStorage.setItem('projectmanager', JSON.stringify(storage));
        setCounter(counter + 1)
        setNewTask(1)
    }





    
    if(props.myTasksView === 'Today'){
        return(<div className="my-tasks-container">


        <div className="my-tasks-wrapper">


        
           
            {tasks.todayTasks.map((task) => <MyTask type="today" data={task} updateTasks={setTasks} length={JSON.parse(localStorage.getItem('projectmanager')).myTasks.length} />)}

            <div className="add-my-task-container">
                {renderNewTask()}
            </div>





        </div>



    </div>)
    }

    else if(props.myTasksView === 'My Tasks'){

      

        return(<div className="my-tasks-container">


        <div className="my-tasks-wrapper">

           
        {tasks.todayTasks.map((task) => <MyTask type="today" data={task} updateTasks={setTasks} length={JSON.parse(localStorage.getItem('projectmanager')).myTasks.length} />)}
        {tasks.previousTasks.map((task) => <MyTask type='previous' data={task} updateTasks={setTasks} length={JSON.parse(localStorage.getItem('projectmanager')).myTasks.length}/>)}
           

            <div className="add-my-task-container">
                {renderNewTask()}
            </div>





        </div>



    </div>)
    }

    else{
     
        return (<div className="my-tasks-container">


        <div className="my-tasks-wrapper">


            <div>NOTHING FOR NOW</div>

            <div className="add-my-task-container">
                {renderNewTask()}
            </div>





        </div>



    </div>);
    }


  
}

export default MyTasks;