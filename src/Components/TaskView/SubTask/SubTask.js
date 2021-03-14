import React, { useState } from 'react';
import "./SubTask.css"
const SubTask = (props) => {



    function deleteSubTask() {

        props.deleteSubTask(props.data.ID)

    }


    return (<div className="sub-task-container">

        <button className="check-box" onClick={deleteSubTask}>
            <div className="under-box"></div>
        </button>

        <p className="sub-task-text">{props.text}</p>


    </div>);


}

export default SubTask;