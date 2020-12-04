import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./TaskView.css"
import SubTasks from "./SubTasks/SubTasks"
const TaskView = (props) => {

    let taskViewStyle = useSpring({
        from: { height: 0 }, to: {
            height: 800
        }
    })



    return (<animated.div style={taskViewStyle} className="task-view-container">
        <div className="close-task" onClick={closeTask}>X</div>






        <div className="task-view-title">{props.data.taskText}</div>
        <div className="task-view-description">{props.data.taskDescription}</div>
        <div className="task-sub-task-container">
            {props.data.subTasks.map((task) => <SubTasks data={task} />)}

        </div>
        <div className="task-comments-section">

        </div>

        <button className="move-to-task-button task-view-button">Move To </button>
        <button className="delete-task-button task-view-button" onClick={deleteTask}>Delete</button>




    </animated.div>);


    function deleteTask() {
        props.deleteTask(props.data)
    }



    function closeTask() {
        props.closeTaskView();
    }
}

export default TaskView;