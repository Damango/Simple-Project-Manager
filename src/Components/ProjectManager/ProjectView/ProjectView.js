import React, { useState } from 'react';
import TaskCard from "./TaskCard/TaskCard"
import "./ProjectView.css"
const ProjectView = (props) => {

    let [todos, setTodos] = useState(props.projectData.toDoTasks);
    let [inProgress, setInProgress] = useState(props.projectData.inProgressTasks);
    let [stuck, setStuck] = useState(props.projectData.stuckTasks);
    let [completed, setCompleted] = useState(props.projectData.completedTasks);






    return (<div className="project-view-container" >
        <div className="close-project-view-button" onClick={closeProjectView}>X</div>
        <div className="project-view-wrapper">

            <div className="project-title"> {props.projectData.projectText}</div>
            <div className="task-cards-container">
                <div className="task-todos tasks-container">{todos.map((todo) => <TaskCard taskData={todo} />)}</div>
                <div className="task-in-progress tasks-container"></div>
                <div className="task-stuck tasks-container"></div>
                <div className="task-complete tasks-container"></div>

            </div>
        </div>
    </div>);



    function closeProjectView() {

        props.closeProjectView();
    }


}

export default ProjectView;