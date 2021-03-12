import React from 'react';
import "./ProjectSubHeading.css"
const ProjectSubHeading = (props) => {


    return (<div className="project-sub-heading" onClick={() => { props.changeView(props.data); }}>

        <div className="project-sub-heading-text"> {props.text}</div>
        <div className="project-sub-heading-count">{props.count}</div>



    </div>);
}

export default ProjectSubHeading;