import React, { useState, useEffect } from 'react';
import "./SubTask.css"
const SubTask = (props) => {


   const [completeContainer, setCompleteContainer] = useState("sub-task-container-" + props.data.complete)
   const [completeCheck, setCompleteCheck] = useState("check-box-" + props.data.complete);
   const [underBoxComplete, setUnderBoxComplete] = useState('under-box-' + props.data.complete)






    function deleteSubTask() {

        props.deleteSubTask(props.data.ID)
     
        
    }

    function completeSubTask(){

        setCompleteContainer('sub-task-container-true');
        setCompleteCheck('check-box-true');
        setUnderBoxComplete('under-box-true')


        props.completeSubTask(props.data.ID)
       

    }

    
         

    return (<div className={completeContainer}>

        <button className={completeCheck} onClick={completeSubTask}>
            <div className={underBoxComplete}></div>
        </button>

        <p className="sub-task-text">{props.text}</p>
        <button className="delete-sub-task-button" onClick={deleteSubTask}>X</button>


    </div>);


}

export default SubTask;