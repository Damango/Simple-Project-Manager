import React, { useState } from 'react';
import "./AddTaskView.css"
const AddTaskView = (props) => {



    const [theTaskLabels, setTheTaskLabels] = useState([])
    const [devStyle, setDevStyle] = useState("dev-label")
    const [designStyle, setDesignStyle] = useState("design-label")
    const [engStyle, setEngStyle] = useState('eng-label')
    const [researchStyle, setResearchStyle] = useState("research-label")




    function addTask() {



        let newTask;
        let i;
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let title = document.querySelector('.task-title-input').value;
        let description = document.querySelector('.description-input').value;
       
        newTask = {
            taskTitle: title,
            taskDescription: description,
            taskLabels: theTaskLabels,
            subTasks: [],
            taskComments: [],
            taskType: "todo",
            taskID: Math.floor(Math.random() * 10000)
        }

    



        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === props.projectID) {
                storage.projects[i].projectTasks.push(newTask)
                let newProjectData = storage;
                localStorage.setItem('projectmanager', JSON.stringify(newProjectData))


                props.updateProject(storage.projects[i])
            }
        }




 

    }


    function taskHolding(label) {
        let theArray
        if (theTaskLabels != null) {
            theArray = theTaskLabels;
        }

        else {
            theArray = [];
        }

        let theLength = theArray.length
        let spotted = false;
        let i;
        for (i = 0; i <= theLength; i++) {
            if (label === theArray[i]) {
                spotted = true;
                theArray.splice(i, 1)
                setTheTaskLabels(theArray)
                break;
            }
        }
        if (spotted != true) {
            theArray.push(label)
            setTheTaskLabels(theArray)
        }

    }












    return (<div className="add-task-view-container">


        <div className="close-task-view" onClick={() => { props.closeTask("close") }}>X</div>

        <div className="task-title-input-container"><input className="task-title-input" placeholder="Enter Title" /></div>
        <div className="task-description-input-container"><textarea className="description-input" placeholder="Enter Description" /></div>
        <div className="label-header">Labels</div>
        <div className="label-selection">
            <button className={"label " + devStyle} onClick={() => { taskHolding("Development"); if (devStyle === 'dev-label') { setDevStyle('dev-label-selected') } else { setDevStyle('dev-label') } }}>Development</button>
            <button className={"label " + designStyle} onClick={() => { taskHolding("Design"); if (designStyle === 'design-label') { setDesignStyle('design-label-selected') } else { setDesignStyle('design-label') } }}>Design</button>
            <button className={"label " + engStyle} onClick={() => { taskHolding("Engineering"); if (engStyle === 'eng-label') { setEngStyle('eng-label-selected') } else { setEngStyle('eng-label') } }}>Engineering</button>
            <button className={"label " + researchStyle} onClick={() => { taskHolding("Research"); if (researchStyle === 'research-label') { setResearchStyle('research-label-selected') } else { setResearchStyle('research-label') } }}>Research</button>
        </div>
        <button className="submit-task-button" onClick={addTask}>Submit +</button>




    </div>

    );
}

export default AddTaskView;