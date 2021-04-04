import React, { useState, useEffect } from 'react';
import TaskLabel from "./TaskLabel/TaskLabel"
import "./Task.css"
const Task = (props) => {


    const [optionState, setOptionState] = useState(0);
    const [theLabel, setTheLabel] = useState(props.data.taskLabels[0])






    useEffect(() => {


    }, [])


    function openTaskOptions() {

        if (optionState === 1) {
            setOptionState(0)
        }
        else {
            setOptionState(1)
        }

    }

    function extraLabelCount() {


        let theLength = props.data.taskLabels.length;




        if (theLength > 1) {
            return (<div className="extra-label-count">+{theLength - 1}</div>)
        }



    }



    function renderOptions() {
        if (optionState === 1) {
            return (<div className="options-container">
                <div className="delete-option" onClick={() => { props.deleteTask(props.data.taskID, props.projectID, props.data.taskType); setOptionState(0) }}>DELETE OPTION</div>
            </div>)
        }

    }



    function renderCompleteTask() {

        if (props.data.taskType === 'complete') {
            return (<div className="completed-badge">Complete <i className="fas fa-check"></i></div>)
        }

        else {
            return (<span>
                <div className="task-sub-task-count">{props.data.subTasks.length}</div>
                <div className="task-comments-count"><i className="far fa-comment"></i>{props.data.taskComments.length}</div>
            </span>)
        }


    }
    return (<div className="task-container" >
        <div className="task-options-container" onClick={() => { openTaskOptions(); console.log(props.data) }}><i className="fas fa-ellipsis-v"></i></div>
        {renderOptions()}
        <div className="task-body-container" onClick={() => { props.openTask(props.data, 1); }}>


            <div className="task-title-container">
                {props.data.taskTitle}
            </div>

            <div className="task-description-container">

                {props.data.taskDescription}
            </div>



            {renderCompleteTask()}



            <div className="task-labels-container"><TaskLabel text={theLabel} /> {extraLabelCount()}</div>


        </div>
    </div>);
}

export default Task;