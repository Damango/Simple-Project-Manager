import React from 'react';

const ProjectSettings = (props) => {
    return ( <div className="project-settings-container">
        
        <button onClick={() => {props.deleteProject()}}>Delete Project</button></div> );
}
 
export default ProjectSettings;