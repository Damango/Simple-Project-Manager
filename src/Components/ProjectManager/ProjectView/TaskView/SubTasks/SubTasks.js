import React from 'react';
import "./SubTasks.css"

const SubTasks = (props) => {




    return (<div className="sub-task-container">
        <div className="sub-task-checkbox" onClick={completeSubTask}></div>
        <div className="sub-task-text">{props.data.subTaskText}</div>

    </div>);



    function completeSubTask() {



        let oldProjectData = JSON.parse(localStorage.getItem('project-manager-simple'));
        let oldTaskView;
        let newTaskView;
        let i, j;
        for (i = 0; i < oldProjectData[props.projectID].toDoTasks.length; i++) {
            if (oldProjectData[props.projectID].toDoTasks[i].taskID === props.taskID) {
                oldTaskView = oldProjectData[props.projectID].toDoTasks[i];
                for (j = 0; j < oldTaskView.subTasks.length; j++) {
                    if (oldTaskView.subTasks[j].subTaskID === props.data.subTaskID) {
                        oldTaskView.subTasks.splice(j, 1);
                        newTaskView = oldTaskView;

                        oldProjectData[props.projectID].toDoTasks[i] = newTaskView;
                        props.removeStep(newTaskView);
                        localStorage.setItem('project-manager-simple', JSON.stringify(oldProjectData));
                    }
                }

            }

        }



    }
}

export default SubTasks;