import React from 'react';
import "./ProjectSubHeading.css"
const ProjectSubHeading = (props) => {

    let totalLength = props.data.projectTasks.toDoTasks.length + props.data.projectTasks.inProgressTasks.length + props.data.projectTasks.stuckTasks.length
    return (<div className="project-sub-heading" onClick={() => { props.changeView(props.data);  }}>

        <div className="project-sub-heading-text"> {props.text}</div>
        <div className="project-sub-heading-count">{totalLength}</div>



    </div>);
}

export default ProjectSubHeading;