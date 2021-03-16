import React from 'react';
import "./TaskLabel.css"
const TaskLabel = (props) => {


    let taskStyle;

    if (props.text === "Development") {
        taskStyle = {
            backgroundColor: '#136dff'
        }
    }

    else if (props.text === "Design") {
        taskStyle = {
            backgroundColor: "#8e44ad"
        }
    }

    else if (props.text === "Engineering") {
        taskStyle = {
            backgroundColor: "#e67e22"
        }
    }

    else if (props.text === "Research") {
        taskStyle = {
            backgroundColor: "#27ae60"
        }
    }





    return (<div className="task-label" style={taskStyle}>{props.text}</div>);
}

export default TaskLabel;