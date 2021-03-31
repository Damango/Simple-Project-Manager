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








    /* CURRENTLY CREATED TASKS */

    return (<div className={theStyle}>
        <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

        <div className="task-view-title">{props.data.taskTitle}</div><div className="move-container"><button className="move-button" onClick={moveOptions}>MOVE</button>{renderMoveOptions()}</div>
        <div className="task-description">{props.data.taskDescription}</div>

        <div className="task-view-labels-container">
            {props.data.taskLabels.map((label) => <div className={"task-view-label " + label.toLowerCase()} key={Math.floor(Math.random() * 500)}>{label}</div>)}
        </div>
        <div className="add-sub-tasks-container">

            <div className="sub-task-container-header">Sub Tasks</div>

            {subTasks.map((task) => <SubTask text={task.text} data={task} projectID={props.projectID} taskID={props.data.taskID} deleteSubTask={deleteSubTask} key={Math.floor(Math.random() * 500)} />)}
            <div className="sub-task-container-new">{renderAddTaskState()}</div>


            <div className={buttonsContainer}>
                <button className={buttonState} onClick={addSubTask}>Add Sub Task + </button>

                <button className="cancel-button" onClick={() => { setsubTaskState(0); setButtonsContainer('add-task-buttons-container-closed') }}>Cancel</button>
            </div>
        </div>


    </div>)



    function deleteSubTask(subTaskID) {
        let i, j, k;
        let storage = JSON.parse(localStorage.getItem('projectmanager'));
        let project;

        let projectPlace;


        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === props.projectID) {
                project = storage.projects[i];
                projectPlace = i;
                for (k = 0; k < storage.projects[projectPlace].projectTasks.length; k++) {
                    if (storage.projects[projectPlace].projectTasks[k].taskID === props.data.taskID) {
                        for (j = 0; j < storage.projects[projectPlace].projectTasks[k].subTasks.length; j++) {
                            if (storage.projects[projectPlace].projectTasks[k].subTasks[j].ID === subTaskID) {
                                storage.projects[projectPlace].projectTasks[k].subTasks.splice(j, 1)
                                setSubTasks(storage.projects[projectPlace].projectTasks[k].subTasks)

                            }
                        }
                    }
                }
            }
        }

        localStorage.setItem('projectmanager', JSON.stringify(storage))

        setsubTaskState(0)

        props.updateProject(storage.projects[projectPlace])
    }



    function addSubTask() {

        let oldTasks = subTasks;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let project
        let i;
        let projectPlace;


        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === props.projectID) {
                project = storage.projects[i];
                projectPlace = i;

            }
        }

        let subTaskText = document.querySelector('.sub-task-input').value;
        let newSubTask = {
            text: subTaskText,
            ID: Math.floor(Math.random() * 1000)
        }

        for (i = 0; i < project.projectTasks.length; i++) {
            if (props.data.taskID === project.projectTasks[i].taskID) {
                project.projectTasks[i].subTasks.push(newSubTask)
                storage.projects[projectPlace] = project

            }
        }

        localStorage.setItem('projectmanager', JSON.stringify(storage));
        console.log(JSON.parse(localStorage.getItem('projectmanager')))
        oldTasks.push(newSubTask)
        setSubTasks(oldTasks)
        setButtonState("add-sub-task-button-closed")
        setButtonsContainer('add-task-buttons-container-closed')
        setsubTaskState(0)
        props.updateProject(storage.projects[projectPlace])



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
        let i, j;
        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === projectID) {
                let project = storage.projects[i];
                for (j = 0; j < project.projectTasks.length; j++) {
                    if (project.projectTasks[j].taskID === taskID) {
                        project.projectTasks[j].taskType = newPlace
                        storage.projects[i] = project;
                        localStorage.setItem('projectmanager', JSON.stringify(storage))
                        props.updateProject(storage.projects[i])
                    }
                }
            }
        }




        props.setTaskView(0)
    }


}

export default TaskView;