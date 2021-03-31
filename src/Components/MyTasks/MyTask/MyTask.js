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



        if(props.type === 'today'){

            let i;
            let storage = JSON.parse(localStorage.getItem('projectmanager'))
            
          
    
            
            for (i = 0; i < storage.myTasks.todayTasks.length; i++) {

                if (storage.myTasks.todayTasks[i].ID === props.data.ID) {
                    storage.myTasks.todayTasks.splice(i, 1)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateTasks(storage.myTasks)
                }
            }





        }


        else if(props.type === 'previous'){

            let i;
            let storage = JSON.parse(localStorage.getItem('projectmanager'))
            
          

            
            for (i = 0; i < storage.myTasks.previousTasks.length; i++) {
    
                if (storage.myTasks.previousTasks[i].ID === props.data.ID) {
                    storage.myTasks.previousTasks.splice(i, 1)
                    localStorage.setItem('projectmanager', JSON.stringify(storage))
                    props.updateTasks(storage.myTasks)
                }
            }





        }






       







    }









    return (<div className={taskStyle}>

        <div className="my-task-checkbox-container" onClick={deleteTask}></div>
     
        <div className="my-task-text-container">{props.data.text}</div>
  

    </div>);
}

export default MyTask;