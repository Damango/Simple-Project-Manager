import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./CreateTaskModal.css"
const CreateTaskModal = (props) => {

    let [selectLabel, setSelectLabel] = useState('');


    let [newTask, setNewTask] = useState({})



    return (<div className="create-task-modal-container">
        <div className="create-task-title-container">
            <div className="create-task-title">Task Title</div>
            <input type="text" />
        </div>
        <div className="create-task-description-container">
            <div className="create-task-description">Task Description</div>
            <textarea />
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
        <button className="submit-button">Submit</button>
    </div>);
}

// Have pre-defined labels and add the ability to make a custom one

export default CreateTaskModal;