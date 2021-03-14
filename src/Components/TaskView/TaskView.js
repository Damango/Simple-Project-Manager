import React, { useEffect, useState } from 'react';
import SubTask from "./SubTask/SubTask"
import "./TaskView.css"

const TaskView = (props) => {

    let [theStyle, setTheStyle] = useState('task-view-container');
    const [move, setMove] = useState(0);
    const [buttonState, setButtonState] = useState("add-sub-task-button-closed");
    const [subTaskState, setsubTaskState] = useState(0);
    const [buttonsContainer, setButtonsContainer] = useState("add-task-buttons-container-closed")
    const [taskInputLength, setTaskInputLength] = useState(0)
    const [subTasks, setSubTasks] = useState([])





    useEffect(() => {

        if (props.data.subTasks != null) {
            setSubTasks(props.data.subTasks)
        }

        if (props.new === true) {
            setTimeout(() => {
                setTheStyle('task-view-container-small')
            }, 10)
        }

        else {
            setTimeout(() => {
                setTheStyle('task-view-container-open')
            }, 10)
        }


    }, [])


    function addTask() {

        let newTask;
        let i;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let title = document.querySelector('.task-title-input').value;
        let description = document.querySelector('.description-input').value;
        console.log(title)
        newTask = {
            taskTitle: title,
            taskDescription: description,
            taskLabels: [
                "Development"
            ],
            subTasks: [],
            taskComments: [],
            taskType: "todo",
            taskID: Math.floor(Math.random() * 10000)
        }

        console.log(newTask)



        storage.projects[props.projectID].projectTasks.push(newTask)
        let newProjectData = storage;
        localStorage.setItem('projectmanager', JSON.stringify(newProjectData))
        props.updateProject(storage.projects[props.projectID])



        console.log(props.projectID)

    }

    if (props.new === true) {


        return (<div className={theStyle}>
            <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

            <div id="thetest" className="task-title-input-container"><input className="task-title-input" placeholder="Enter Title" /></div>
            <div className="task-description-input-container"><textarea className="description-input" placeholder="Enter Description" /></div>

            <button className="submit-task-button" onClick={addTask}>Submit +</button>
        </div>)
    }






    /* CURRENTLY CREATED TASKS */






    else {
        return (<div className={theStyle}>
            <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

            <div className="task-view-title">{props.data.taskTitle}</div><div className="move-container"><button className="move-button" onClick={moveOptions}>MOVE</button>{renderMoveOptions()}</div>
            <div className="task-description">{props.data.taskDescription}</div>
            <div className="add-sub-tasks-container">

                <div className="sub-task-container-header">Sub Tasks</div>

                {subTasks.map((task) => <SubTask text={task.text} data={task} projectID={props.projectID} taskID={props.data.taskID} deleteSubTask={deleteSubTask} />)}
                <div className="sub-task-container-new">{renderAddTaskState()}</div>


                <div className={buttonsContainer}>
                    <button className={buttonState} onClick={addSubTask}>Add Sub Task + </button>

                    <button className="cancel-button" onClick={() => { setsubTaskState(0); setButtonsContainer('add-task-buttons-container-closed') }}>Cancel</button>
                </div>
            </div>


        </div>)
    }


    function deleteSubTask(subTaskID) {
        let i, j;
        let storage = JSON.parse(localStorage.getItem('projectmanager'));
        for (i = 0; i < storage.projects[props.projectID].projectTasks.length; i++) {
            if (storage.projects[props.projectID].projectTasks[i].taskID === props.data.taskID) {
                for (j = 0; j < storage.projects[props.projectID].projectTasks[i].subTasks.length; j++) {
                    if (storage.projects[props.projectID].projectTasks[i].subTasks[j].ID === subTaskID) {
                        storage.projects[props.projectID].projectTasks[i].subTasks.splice(j, 1)
                        localStorage.setItem('projectmanager', JSON.stringify(storage))
                        setSubTasks(storage.projects[props.projectID].projectTasks[i].subTasks)
                    }
                }
            }
        }

        setsubTaskState(0)
        props.updateProject(storage.projects[props.projectID])
    }



    function addSubTask() {

        let oldTasks = subTasks;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let project = storage.projects[props.projectID];
        let i;


        let subTaskText = document.querySelector('.sub-task-input').value;
        let newSubTask = {
            text: subTaskText,
            ID: Math.floor(Math.random() * 1000)
        }

        for (i = 0; i < project.projectTasks.length; i++) {
            if (props.data.taskID === project.projectTasks[i].taskID) {
                project.projectTasks[i].subTasks.push(newSubTask)
                storage.projects[props.projectID] = project
                localStorage.setItem('projectmanager', JSON.stringify(storage));
            }
        }


        oldTasks.push(newSubTask)

        setSubTasks(oldTasks)
        setButtonState("add-sub-task-button-closed")
        setButtonsContainer('add-task-buttons-container-closed')
        setsubTaskState(0)

        props.updateProject(storage.projects[props.projectID])



    }

    function renderAddTaskState() {
        if (subTaskState === 0) {
            return (<button onClick={() => { setsubTaskState(1); setButtonsContainer('add-task-buttons-container') }} className="write-task-button">+ Write Task</button>)
        }


        else {


            return (<input className="sub-task-input" placeholder="Enter Sub Task" autoFocus={true} onChange={() => { let length = document.querySelector('.sub-task-input').value.length; setTaskInputLength(length); if (length >= 1) { setButtonState("add-sub-task-button") } else { setButtonState("add-sub-task-button-closed") } }} />)
        }
    }


    function moveOptions() {

        if (move === 0) {
            setMove(1)
        }
        else if (move === 1) {
            setMove(0)
        }
    }

    function renderMoveOptions() {
        if (move === 1) {
            return (<div className="move-options-container">

                <div className="move-option todo-option" onClick={() => { moveTask(props.projectID, props.data.taskID, 'todo', props.data.taskType) }}>To Do</div>
                <div className="move-option todo-option" onClick={() => { moveTask(props.projectID, props.data.taskID, 'in-progress', props.data.taskType) }}>In Progress</div>
                <div className="move-option todo-option" onClick={() => { moveTask(props.projectID, props.data.taskID, 'stuck', props.data.taskType) }}>Stuck</div>
                <div className="move-option todo-option" onClick={() => { moveTask(props.projectID, props.data.taskID, 'complete', props.data.taskType) }}>Complete</div>


            </div >)
        }
    }

    function moveTask(projectID, taskID, newPlace, previous) {

        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let project = storage.projects[projectID];
        let i;
        for (i = 0; i < project.projectTasks.length; i++) {
            if (project.projectTasks[i].taskID === taskID) {
                project.projectTasks[i].taskType = newPlace
                storage.projects[projectID] = project;
                localStorage.setItem('projectmanager', JSON.stringify(storage))
                props.updateProject(storage.projects[props.projectID])
            }
        }
        props.setTaskView(0)
    }


}

export default TaskView;