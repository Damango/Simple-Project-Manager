import React, { useState } from 'react';
import TaskCard from "./TaskCard/TaskCard"
import TaskView from "./TaskView/TaskView"
import CreateTaskModal from "./CreateTaskModal/CreateTaskModal"
import "./ProjectView.css"
const ProjectView = (props) => {

    const [todos, setTodos] = useState(props.projectData.toDoTasks);
    const [inProgress, setInProgress] = useState(props.projectData.inProgressTasks);
    const [stuck, setStuck] = useState(props.projectData.stuckTasks);
    const [completed, setCompleted] = useState(props.projectData.completedTasks);

    let [changeNumber, setChangeNumber] = useState(0)

    let [taskView, setTaskView] = useState(0);
    let [taskData, setTaskData] = useState();
    let [createTask, setCreateTask] = useState(0);




    return (<div className="project-view-container" >

        <div className="close-project-view-button" onClick={closeProjectView}>X</div>
        <div className="project-view-wrapper">

            <div className="project-title"> {props.projectData.projectText}</div>
            <div className="task-cards-container">
                <div className="tasks-wrapper">
                    <div className="task-container-header">To Do</div>
                    <div className="task-todos tasks-container">

                        {todos.map((todo) => <TaskCard taskData={todo} changeTaskView={changeTaskView} projectID={props.projectData.projectID} key={todo.taskID} />)}
                        <button className="create-task-button" onClick={openCreateTask}>Create Task +</button>
                    </div>
                </div>
                <div className="tasks-wrapper">
                    <div className="task-container-header">In Progress</div>
                    <div className="task-in-progress tasks-container">

                        {inProgress.map((inProgress) => <TaskCard taskData={inProgress} changeTaskView={changeTaskView} projectID={props.projectData.projectID} key={inProgress.taskID} />)}
                    </div>
                </div>
                <div className="tasks-wrapper">
                    <div className="task-container-header">Stuck</div>
                    <div className="task-stuck tasks-container">

                        {stuck.map((inProgress) => <TaskCard taskData={inProgress} changeTaskView={changeTaskView} projectID={props.projectData.projectID} key={inProgress.taskID} />)}
                    </div>
                </div>
                <div className="tasks-wrapper">
                    <div className="task-container-header">Complete</div>
                    <div className="task-complete tasks-container">

                        {completed.map((inProgress) => <TaskCard taskData={inProgress} changeTaskView={changeTaskView} projectID={props.projectData.projectID} key={inProgress.taskID} />)}
                    </div>
                </div>
            </div>
        </div>
        {renderCreateTask()}
        {renderTaskView()}
    </div>);

    function moveTask(taskAreaNew, taskAreaOld, taskID) {

        if (taskAreaNew === 'in-progress') {
            if (taskAreaOld === 'todo') {
                let fullStorageData = JSON.parse(localStorage.getItem('project-manager-simple'))
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));

                //let data = todos;
                let data = storageData[props.projectData.projectID].toDoTasks
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {

                        let newInProgress = data[i]
                        console.log(data[i])

                        newInProgress.taskType = 'in-progress'
                        inProgress.push(newInProgress);
                        storageData[props.projectData.projectID].inProgressTasks = inProgress;
                        data.splice(i, 1);
                        storageData[props.projectData.projectID].toDoTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))
                        setTodos(data)

                    }
                }

            }

            if (taskAreaOld === 'stuck') {
                //let data = stuck;
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                let data = storageData[props.projectData.projectID].stuckTasks

                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newInProgress = data[i]
                        newInProgress.taskType = 'in-progress'
                        inProgress.push(newInProgress);
                        storageData[props.projectData.projectID].inProgressTasks = inProgress;
                        data.splice(i, 1);
                        setStuck(data)
                        storageData[props.projectData.projectID].stuckTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))
                    }
                }
            }
        }

        if (taskAreaNew === 'stuck') {
            if (taskAreaOld === 'todo') {
                let fullStorageData = JSON.parse(localStorage.getItem('project-manager-simple'))
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                //let data = todos;
                let data = storageData[props.projectData.projectID].toDoTasks;
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newStuck = data[i]
                        newStuck.taskType = 'stuck'
                        stuck.push(newStuck);
                        storageData[props.projectData.projectID].stuckTasks = stuck;
                        data.splice(i, 1);
                        setTodos(data)
                        storageData[props.projectData.projectID].toDoTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))

                    }
                }
            }

            if (taskAreaOld === 'in-progress') {
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                // let data = inProgress;
                let data = storageData[props.projectData.projectID].inProgressTasks
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newStuck = data[i]
                        newStuck.taskType = 'stuck'
                        stuck.push(newStuck);
                        storageData[props.projectData.projectID].stuckTasks = stuck;
                        data.splice(i, 1);
                        setInProgress(data)
                        storageData[props.projectData.projectID].inProgressTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))
                    }
                }
            }
        }

        if (taskAreaNew === 'completed') {
            if (taskAreaOld === 'todo') {

                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                // let data = todos;

                let data = storageData[props.projectData.projectID].toDoTasks
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newCompleted = data[i]
                        newCompleted.taskType = 'completed'
                        completed.push(newCompleted);
                        storageData[props.projectData.projectID].completedTasks = completed;
                        data.splice(i, 1);
                        setTodos(data)
                        storageData[props.projectData.projectID].toDoTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))
                    }
                }
            }

            if (taskAreaOld === 'in-progress') {
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                //let data = inProgress;
                let data = storageData[props.projectData.projectID].inProgressTasks
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newCompleted = data[i]
                        newCompleted.taskType = 'completed'
                        completed.push(newCompleted);
                        storageData[props.projectData.projectID].completedTasks = completed;
                        data.splice(i, 1);
                        setInProgress(data)
                        storageData[props.projectData.projectID].inProgressTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))
                    }
                }
            }

            if (taskAreaOld === 'stuck') {
                let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
                //let data = stuck;
                let data = storageData[props.projectData.projectID].stuckTasks
                let i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].taskID === taskID) {
                        let newCompleted = data[i]
                        newCompleted.taskType = 'completed'
                        completed.push(newCompleted);
                        storageData[props.projectData.projectID].completedTasks = completed;
                        data.splice(i, 1);
                        setStuck(data)
                        storageData[props.projectData.projectID].stuckTasks = data;
                        localStorage.setItem('project-manager-simple', JSON.stringify(storageData))

                    }
                }
            }
        }

        setChangeNumber(changeNumber + 1)
    }

    function openCreateTask() {
        if (createTask === 0) {
            setCreateTask(1);
        }
        else { setCreateTask(0) }
    }

    function addNewTask(data) {
        setTodos(data);
        setChangeNumber(changeNumber + 1)
    }

    function deleteTask(data) {


        let storage = JSON.parse(localStorage.getItem('project-manager-simple'));
        let storageData = JSON.parse(localStorage.getItem('project-manager-simple'));
        let i;
        let oldList;
        if (data.taskType === 'todo') {
            oldList = storageData[props.projectData.projectID].toDoTasks;

            for (i = 0; i < oldList.length; i++) {
                if (oldList[i].taskID === data.taskID) {
                    oldList.splice(i, 1);
                }
            }
            storage[props.projectData.projectID].toDoTasks = oldList;

            setTodos(oldList);
            setChangeNumber(changeNumber + 2);
            setTaskView(0)

            localStorage.setItem('project-manager-simple', JSON.stringify(storage));
        }

        if (data.taskType === 'in-progress') {
            oldList = storageData[props.projectData.projectID].inProgressTasks;

            for (i = 0; i < oldList.length; i++) {
                if (oldList[i].taskID === data.taskID) {
                    oldList.splice(i, 1);
                }
            }
            storage[props.projectData.projectID].inProgressTasks = oldList;

            setInProgress(oldList);
            setChangeNumber(changeNumber + 2);
            setTaskView(0)

            localStorage.setItem('project-manager-simple', JSON.stringify(storage));
        }

        if (data.taskType === 'stuck') {
            oldList = storageData[props.projectData.projectID].stuckTasks;

            for (i = 0; i < oldList.length; i++) {
                if (oldList[i].taskID === data.taskID) {
                    oldList.splice(i, 1);
                }
            }
            storage[props.projectData.projectID].stuckTasks = oldList;

            setStuck(oldList);
            setChangeNumber(changeNumber + 2);
            setTaskView(0)

            localStorage.setItem('project-manager-simple', JSON.stringify(storage));
        }

        if (data.taskType === 'completed') {
            oldList = storageData[props.projectData.projectID].completedTasks;

            for (i = 0; i < oldList.length; i++) {
                if (oldList[i].taskID === data.taskID) {
                    oldList.splice(i, 1);
                }
            }
            storage[props.projectData.projectID].completedTasks = oldList;

            setCompleted(oldList);
            setChangeNumber(changeNumber + 2);
            setTaskView(0)

            localStorage.setItem('project-manager-simple', JSON.stringify(storage));
        }


    }

    function closeCreateModal() {
        setCreateTask(0)
    }

    function renderCreateTask() {
        if (createTask === 1) {
            return (<CreateTaskModal projectID={props.projectData.projectID} oldTaskList={props.projectData.toDoTasks} addNewTask={addNewTask} closeModal={closeCreateModal} key={Math.random() * 1000} />)
        }
    }
    function closeProjectView() {
        props.closeProjectView();
    }

    function changeTaskView(data) {
        setChangeNumber(changeNumber + 1)
        setTaskData(data);
        setTaskView(0)
        setTimeout(function () {
            setTaskView(1);
        }, 1)

    }


    function renderTaskView() {
        if (taskView === 1) {
            return (<TaskView projectID={props.projectData.projectID} data={taskData} closeTaskView={closeTaskView} deleteTask={deleteTask} moveTask={moveTask} />)
        }
        else {
            return ''
        }
    }

    function closeTaskView() {
        setTaskView(0)
    }
}

export default ProjectView;