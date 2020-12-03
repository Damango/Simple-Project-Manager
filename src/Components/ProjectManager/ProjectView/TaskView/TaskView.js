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



    </animated.div>);



    function closeTask() {
        props.closeTaskView();
    }
}

export default TaskView;