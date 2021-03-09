import React from 'react';
import "./ProjectManager.css"
const ProjectManager = (props) => {
    return (<div className="project-manager-container">

        <div className="side-bar-container">


            <div className="side-bar">

                <div className="side-bar-tasks">

                    <div className="side-bar-tasks-container my-tasks">
                        <div className="side-bar-task-header">My Tasks</div>
                        <div className="side-bar-sub-heading-container">
                            <div className="side-bar-sub-heading">Today</div>
                            <div className="side-bar-sub-heading">Upcoming</div>
                            <div className="side-bar-sub-heading">All</div>
                        </div>

                    </div>


                    <div className="side-bar-tasks-container projects">
                        <div className="side-bar-task-header">Projects</div>
                    </div>

                </div>


                <div className="projects-list"></div>
            </div>



        </div>

        <div className="main-view-container">

            <div className="main-view">

                MAIN VIEW
            </div>
        </div>



    </div>);
}

export default ProjectManager;