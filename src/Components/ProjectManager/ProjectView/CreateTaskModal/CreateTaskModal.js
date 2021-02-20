import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./CreateTaskModal.css"
const CreateTaskModal = (props) => {

    return (<div className="create-task-modal-container">
        <div className="create-task-title-container">
            <div className="create-task-title">Task Title</div>
            <input className="task-title" type="text" />
        </div>
        <div className="create-task-description-container">
            <div className="create-task-description">Task Description</div>
            <textarea className="task-description" />
        </div>
        <div className="label-selection-container">
            <div className="label-selection-title">Select Label</div>
            <div className="create-label-list">
                <div className="development-label create-label">Development</div>
                <div className="design-label create-label">Design</div>
                <div className="bussiness-label create-label">Bussiness</div>
                <div className="engineering-label create-label">Engineering</div>
            </div>

        </div>
        <button className="submit-button" onClick={createNewTask}>Submit</button>
        <button className="cancel-button" onClick={closeCreateModal}>Close</button>
    </div>);



    function createNewTask() {
        let oldProjectData = JSON.parse(localStorage.getItem('project-manager-simple'));
        let newProjectData;
        let oldTaskList = props.oldTaskList;
        let newTaskList;

        let newTask = {
            comments: [],
            subTasks: [],
            taskDescription: document.querySelector('textarea').value,
            taskLabels: ['Development'],
            taskText: document.querySelector('.task-title').value,
            taskType: "todo",
            taskID: Math.floor(Math.random() * 40000)
        }
        oldTaskList.push(newTask);
        newTaskList = oldTaskList;
        oldProjectData[props.projectID].toDoTasks = newTaskList;
        newProjectData = oldProjectData;
        localStorage.setItem('project-manager-simple', JSON.stringify(newProjectData));
        props.addNewTask(newTaskList);



    }


    function closeCreateModal() {
        props.closeModal();
    }
}

// Have pre-defined labels and add the ability to make a custom one

export default CreateTaskModal;