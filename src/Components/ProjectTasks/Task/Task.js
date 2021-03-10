import React from 'react';
import "./Task.css"
const Task = (props) => {
    return (<div className="task-container">{props.data.taskTitle}</div>);
}

export default Task;