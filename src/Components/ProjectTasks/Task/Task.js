import React from 'react';
import "./Task.css"
const Task = (props) => {
    return (<div className="task-container" onClick={() => {props.openTask(props.data, 1);}}>
        <div className="task-title-container">
        {props.data.taskTitle}
        </div>

        <div className="task-description-container">

            {props.data.taskDescription}
        </div>
        <div className="task-sub-task-count">{props.data.subTasks.length}</div>
        <div className="task-comments-count">{props.data.taskComments.length}</div>
      
        
        
        
        </div>);
}

export default Task;