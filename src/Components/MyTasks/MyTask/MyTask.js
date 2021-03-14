import React, { useEffect, useState } from 'react';
import "./MyTask.css"
const MyTask = (props) => {

    const [taskStyle, setTaskStyle] = useState('my-task-container')


    useEffect(() => {





        setTimeout(() => {
            setTaskStyle('my-task-container-open')
        }, 10)



    }, [])



    function deleteTask() {

        let i;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))


        for (i = 0; i < storage.myTasks.length; i++) {
            if (storage.myTasks[i].ID === props.data.ID) {
                storage.myTasks.splice(i, 1)


                localStorage.setItem('projectmanager', JSON.stringify(storage))
                props.updateTasks(storage.myTasks)
            }
        }







    }





    return (<div className={taskStyle}>

        <div className="my-task-checkbox-container"></div>
        <button className="delete-button" onClick={deleteTask}>X</button>
        <div className="my-task-text-container">{props.data.text}</div>

    </div>);
}

export default MyTask;