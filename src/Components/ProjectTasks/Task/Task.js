import React, { useState } from 'react';
import "./Task.css"
const Task = (props) => {


    const [optionState, setOptionState] = useState(0)


    function openTaskOptions() {

        if (optionState === 1) {
            setOptionState(0)
        }
        else {
            setOptionState(1)
        }

    }



    function renderOptions() {


        if (optionState === 1) {
            return (<div className="options-container">
                <div className="delete-option" onClick={() => { props.deleteTask(props.data.taskID, props.projectID, props.data.taskType); setOptionState(0) }}>DELETE OPTION</div>
            </div>)
        }




    }
    return (<div className="task-container" >
        <div className="task-options-container" onClick={() => { openTaskOptions(); console.log(props.data) }}><i class="fas fa-ellipsis-v"></i></div>
        {renderOptions()}
        <div className="task-body-container" onClick={() => { props.openTask(props.data, 1); }}>


            <div className="task-title-container">
                {props.data.taskTitle}
            </div>

            <div className="task-description-container">

                {props.data.taskDescription}
            </div>
            <div className="task-sub-task-count">{props.data.subTasks.length}</div>
            <div className="task-comments-count"><i class="far fa-comment"></i>{props.data.taskComments.length}</div>



        </div>
    </div>);
}

export default Task;