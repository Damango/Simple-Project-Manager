import React from 'react';
import "./TaskView.css"

const TaskView = (props) => {



    if(props.new === true){
        return ( <div className="task-view-container">
        <div className="close-task-view" onClick={() => {props.closeTask("close")}}>X</div>

        <div className="task-title-input-container"><input placeholder="Enter Title"/></div>
        <div className="task-description-input-container"><textarea className="description-input" placeholder="Enter Description"/></div>


    </div> )
    }
else{
    return ( <div className="task-view-container">
    <div className="close-task-view" onClick={() => {props.closeTask("close")}}>X</div>

<div className="task-view-title">{props.data.taskTitle}</div>
<div className="task-description">{props.data.taskDescription}</div>


</div> )
}
    
   
}
 
export default TaskView;