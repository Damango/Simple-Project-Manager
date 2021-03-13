import React, { useState } from 'react';
import "./SubTask.css"
const SubTask = (props) => {


    return (<div className="sub-task-container">

        <button className="check-box">
            <div className="under-box"></div>
        </button>

        <div className="sub-task-text">{props.text}</div>


    </div>);


}

export default SubTask;