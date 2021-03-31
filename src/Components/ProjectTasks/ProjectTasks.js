import React, { useState } from 'react';
import "./ProjectTasks.css"
import Task from "./Task/Task"
const ProjectTasks = (props) => {

    const [data, setData] = useState(props.projectData)








    return (<div className="project-tasks-container" >



        <div className="project-tasks-wrapper">


            <div className="task-column project-todo"><div className="task-types-title">To Do</div>{props.todos.reverse().map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} key={Math.floor(Math.random() * 500)}/>)}</div>
            <div className="task-column project-in-progress"><div className="task-types-title">In Progress</div>{props.inProgress.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} key={Math.floor(Math.random() * 500)}/>)}</div>
            <div className="task-column project-stuck"><div className="task-types-title">Stuck</div>{props.stuck.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} key={Math.floor(Math.random() * 500)}/>)}</div>
            <div className="task-column project-complete"><div className="task-types-title">Complete</div>{props.complete.map((task) => <Task deleteTask={props.deleteTask} openTask={props.openTaskView} data={task} projectID={props.projectID} key={Math.floor(Math.random() * 500)}/>)}</div>
        </div>


    </div>);
}

export default ProjectTasks;