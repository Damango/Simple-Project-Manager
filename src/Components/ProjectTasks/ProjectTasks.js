import React from 'react';
import "./ProjectTasks.css"
import Task from "./Task/Task"
const ProjectTasks = (props) => {
    return (<div className="project-tasks-container" >



        <div className="project-tasks-wrapper">


            <div className="task-column project-todo"><div className="task-types-title">To Do</div>{props.projectData.projectTasks.toDoTasks.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} />)}</div>
            <div className="task-column project-in-progress"><div className="task-types-title">In Progres</div>{props.projectData.projectTasks.inProgressTasks.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} />)}</div>
            <div className="task-column project-stuck"><div className="task-types-title">Stuck</div>{props.projectData.projectTasks.stuckTasks.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} />)}</div>
            <div className="task-column project-complete"><div className="task-types-title">Complete</div>{props.projectData.projectTasks.completeTasks.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} />)}</div>
        </div>


    </div>);
}

export default ProjectTasks;