import React from 'react';
import "./TaskCard.css"
import { useSpring, animated } from 'react-spring'

const TaskCard = (props) => {


    let taskCardStyle = useSpring({
        from: { opacity: 0, 'marginTop': -100 },
        to: { opacity: 1, 'marginTop': 10 },
        config: { duration: 500 }
    })



    return (<animated.div style={taskCardStyle} className="task-card-container" onClick={openTasks}>
        <div className="task-text">{props.taskData.taskText}</div>
        <div className="task-description">{props.taskData.taskDescription}</div>
        <div className="task-labels-container">
            {props.taskData.taskLabels.map((label) => <div className="label">{label}</div>)}
        </div>
    </animated.div>);


    function openTasks() {
        props.changeTaskView(props.taskData);
    }
}

export default TaskCard;