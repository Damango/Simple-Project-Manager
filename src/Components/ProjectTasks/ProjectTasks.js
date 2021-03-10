import React from 'react';
import "./ProjectTasks.css"
import Task from "./Task/Task"
const ProjectTasks = (props) => {
    return (<div className="project-tasks-container">
        <div className="project-tasks-title">Project Tasks</div>


        <div className="project-tasks-wrapper">


            <div className="task-column project-todo">{props.projectData.toDoTasks.map((task) => <Task data={task} />)}</div>
            <div className="task-column project-in-progress"></div>
            <div className="task-column project-stuck"></div>
            <div className="task-column project-complete"></div>
        </div>


    </div>);
}

export default ProjectTasks;