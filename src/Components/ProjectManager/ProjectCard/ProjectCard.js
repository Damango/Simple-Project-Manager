import React from 'react';
import "./ProjectCard.css"

const ProjectCard = (props) => {
    return (<div className="project-card-container">
        <div className="project-title">{props.projectInfo.projectText}</div>
        <div className="project-description">{props.projectInfo.projectDescription}</div>
        <div className="project-author">{props.projectInfo.projectAuthor}</div>
        <div className="project-tasks">{props.projectInfo.tasks.length}</div>
    </div>);
}

export default ProjectCard;