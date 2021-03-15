import React from 'react';
import "./AddTaskView.css"
const AddTaskView = (props) => {






    function addTask() {

        let newTask;
        let i;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let title = document.querySelector('.task-title-input').value;
        let description = document.querySelector('.description-input').value;
        console.log(title)
        newTask = {
            taskTitle: title,
            taskDescription: description,
            taskLabels: [
                "Development"
            ],
            subTasks: [],
            taskComments: [],
            taskType: "todo",
            taskID: Math.floor(Math.random() * 10000)
        }

        console.log(newTask)





        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === props.projectID) {
                storage.projects[i].projectTasks.push(newTask)
                let newProjectData = storage;
                localStorage.setItem('projectmanager', JSON.stringify(newProjectData))


                props.updateProject(storage.projects[i])
            }
        }








        console.log(props.projectID)

    }









    return (<div className="add-task-view-container">


        <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

        <div id="thetest" className="task-title-input-container"><input className="task-title-input" placeholder="Enter Title" /></div>
        <div className="task-description-input-container"><textarea className="description-input" placeholder="Enter Description" /></div>

        <button className="submit-task-button" onClick={addTask}>Submit +</button>




    </div>

    );
}

export default AddTaskView;