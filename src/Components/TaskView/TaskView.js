import React, { useEffect, useState } from 'react';
import "./TaskView.css"

const TaskView = (props) => {

    let [theStyle, setTheStyle] = useState('task-view-container')
    const [move, setMove] = useState(0)


    useEffect(() => {

        setTimeout(() => {
            setTheStyle('task-view-container-open')
        }, 10)

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

        for (i = 0; i < storage.projects.length; i++) {
            if (props.projectID === storage.projects[i].projectID) {
                storage.projects[props.projectID].projectTasks.toDoTasks.push(newTask)
                let newProjectData = storage;
                localStorage.setItem('projectmanager', JSON.stringify(newProjectData))
                props.updateProject(storage.projects[props.projectID])

            }
        }
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



        </div>)
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

        if (newPlace === "in-progress" && previous === "todo") {


            let i;
            for (i = 0; i < project.projectTasks.toDoTasks.length; i++) {
                if (project.projectTasks.toDoTasks[i].taskID === taskID) {
                    project.projectTasks.toDoTasks[i].taskType = 'in-progress'
                    project.projectTasks.inProgressTasks.push(project.projectTasks.toDoTasks[i])
                    project.projectTasks.toDoTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "stuck" && previous === "todo") {


            let i;
            for (i = 0; i < project.projectTasks.toDoTasks.length; i++) {
                if (project.projectTasks.toDoTasks[i].taskID === taskID) {
                    project.projectTasks.toDoTasks[i].taskType = 'stuck'
                    project.projectTasks.stuckTasks.push(project.projectTasks.toDoTasks[i])
                    project.projectTasks.toDoTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "stuck" && previous === "in-progress") {


            let i;
            for (i = 0; i < project.projectTasks.inProgressTasks.length; i++) {
                if (project.projectTasks.inProgressTasks[i].taskID === taskID) {
                    project.projectTasks.inProgressTasks[i].taskType = 'stuck'
                    project.projectTasks.stuckTasks.push(project.projectTasks.inProgressTasks[i])
                    project.projectTasks.inProgressTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "in-progress" && previous === "stuck") {


            let i;
            for (i = 0; i < project.projectTasks.stuckTasks.length; i++) {
                if (project.projectTasks.stuckTasks[i].taskID === taskID) {
                    project.projectTasks.stuckTasks[i].taskType = 'in-progress'
                    project.projectTasks.inProgressTasks.push(project.projectTasks.stuckTasks[i])
                    project.projectTasks.stuckTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "complete" && previous === "stuck") {


            let i;
            for (i = 0; i < project.projectTasks.stuckTasks.length; i++) {
                if (project.projectTasks.stuckTasks[i].taskID === taskID) {
                    project.projectTasks.stuckTasks[i].taskType = 'complete'
                    project.projectTasks.completeTasks.push(project.projectTasks.stuckTasks[i])
                    project.projectTasks.stuckTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "complete" && previous === "in-progress") {


            let i;
            for (i = 0; i < project.projectTasks.inProgressTasks.length; i++) {
                if (project.projectTasks.inProgressTasks[i].taskID === taskID) {
                    project.projectTasks.inProgressTasks[i].taskType = 'complete'
                    project.projectTasks.completeTasks.push(project.projectTasks.inProgressTasks[i])
                    project.projectTasks.inProgressTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        else if (newPlace === "complete" && previous === "todo") {


            let i;
            for (i = 0; i < project.projectTasks.toDoTasks.length; i++) {
                if (project.projectTasks.toDoTasks[i].taskID === taskID) {
                    project.projectTasks.toDoTasks[i].taskType = 'complete'
                    project.projectTasks.completeTasks.push(project.projectTasks.toDoTasks[i])
                    project.projectTasks.toDoTasks.splice(i, 1)
                    storage.projects[projectID] = project;
                    console.log(storage)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateProject(storage.projects[props.projectID])
                }
            }

        }

        props.setTaskView(0)


    }


}

export default TaskView;