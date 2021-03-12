import React from 'react';
import "./Task.css"
const Task = (props) => {
    return (<div className="task-container" >
        <div className="task-options-container" onClick={() => { props.deleteTask(props.data.taskID, props.projectID, props.data.taskType); console.log(props.data) }}></div>
        <div className="task-body-container" onClick={() => { props.openTask(props.data, 1); }}>


            <div className="task-title-container">
                {props.data.taskTitle}
            </div>

            <div className="task-description-container">

                {props.data.taskDescription}
            </div>
            <div className="task-sub-task-count">{props.data.subTasks.length}</div>
            <div className="task-comments-count">{props.data.taskComments.length}</div>



        </div>
    </div>);
}

export default Task;