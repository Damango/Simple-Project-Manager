import React from 'react';
import "./TaskCard.css"

const TaskCard = (props) => {
    return (<div className="task-card-container">
        <div className="task-text">{props.taskData.taskText}</div>
        <div className="task-description">{props.taskData.taskDescription}</div>
        <div className="task-labels-container">
            {props.taskData.taskLabels.map((label) => <div className="label">{label}</div>)}
        </div>
    </div>);
}

export default TaskCard;