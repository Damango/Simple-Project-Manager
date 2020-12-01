import React from 'react';
import "./ProjectCard.css"

const ProjectCard = (props) => {

    let tasksNumber = props.projectInfo.toDoTasks.length + props.projectInfo.inProgressTasks.length + props.projectInfo.stuckTasks.length + props.projectInfo.completedTasks.length;




    return (<div className="project-card-container" onClick={changeProjectView}>
        <div className="project-title">{props.projectInfo.projectText}</div>
        <div className="project-description">{props.projectInfo.projectDescription}</div>
        <div className="project-author">{props.projectInfo.projectAuthor}</div>
        <div className="project-tasks">{tasksNumber}</div>
    </div>);



    function changeProjectView() {
        props.changeProjectView(props.projectInfo);
    }


}

export default ProjectCard;