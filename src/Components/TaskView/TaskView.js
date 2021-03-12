import React, { useEffect, useState } from 'react';
import "./TaskView.css"

const TaskView = (props) => {

    let [theStyle, setTheStyle] = useState('task-view-container')


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
    else {
        return (<div className={theStyle}>
            <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

            <div className="task-view-title">{props.data.taskTitle}</div>
            <div className="task-description">{props.data.taskDescription}</div>


        </div>)
    }


}

export default TaskView;