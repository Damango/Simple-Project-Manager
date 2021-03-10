import React from 'react';
import "./ProjectSubHeading.css"
const ProjectSubHeading = (props) => {
    return (<div className="project-sub-heading" onClick={() => { props.changeView(props.data.projectTasks) }}>

        <div className="project-sub-heading-text"> {props.text}</div>
        <div className="project-sub-heading-count">{props.data.projectTasks.toDoTasks.length}</div>



    </div>);
}

export default ProjectSubHeading;