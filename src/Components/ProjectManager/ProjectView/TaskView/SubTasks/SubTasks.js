import React from 'react';
import "./SubTasks.css"
const SubTasks = (props) => {
    return (<div className="sub-task-container">
        <div className="sub-task-checkbox"></div>
        <div className="sub-task-text">{props.data}</div>

    </div>);
}

export default SubTasks;