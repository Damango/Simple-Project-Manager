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
            <div>{props.taskData.taskType}</div>
        </div>
    </animated.div>);


    function openTasks() {

        alert(props.taskData.taskType);

        let taskData = JSON.parse(localStorage.getItem('project-manager-simple'))
        taskData = taskData[props.projectID];
        let i;

        if (props.taskData.taskType === 'todo') {
            for (i = 0; i < taskData.toDoTasks.length; i++) {
                if (taskData.toDoTasks[i].taskID === props.taskData.taskID) {
                    props.changeTaskView(taskData.toDoTasks[i]);
                }

            }
        }

        if (props.taskData.taskType === 'in-progress') {
            for (i = 0; i < taskData.inProgressTasks.length; i++) {
                if (taskData.inProgressTasks[i].taskID === props.taskData.taskID) {
                    props.changeTaskView(taskData.inProgressTasks[i]);
                }

            }
        }

        if (props.taskData.taskType === 'stuck') {
            for (i = 0; i < taskData.stuckTasks.length; i++) {
                if (taskData.stuckTasks[i].taskID === props.taskData.taskID) {
                    props.changeTaskView(taskData.stuckTasks[i]);
                }

            }
        }

        if (props.taskData.taskType === 'completed') {
            for (i = 0; i < taskData.completedTasks.length; i++) {
                if (taskData.completedTasks[i].taskID === props.taskData.taskID) {
                    props.changeTaskView(taskData.completedTasks[i]);
                }

            }
        }


    }
}

export default TaskCard;