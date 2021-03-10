import React, { useState } from 'react';
import MyTasks from "../MyTasks/MyTasks"
import ProjectSubHeading from '../ProjectSubHeading/ProjectSubHeading';
import ProjectTasks from "../ProjectTasks/ProjectTasks"
import "./ProjectManager.css"
const ProjectManager = (props) => {


    const [viewState, setViewState] = useState(0)
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projectmanager')))
    const [projectData, setProjectData] = useState()



    function renderState() {
        if (viewState === 0) {
            return (<MyTasks />)
        }
        else if (viewState === 1) {
            return (<ProjectTasks projectData={projectData} />)
        }
    }

    function changeView(data) {

        setProjectData(data)
        setViewState(1)

    }

    /* localStorage.setItem('projectmanager', JSON.stringify({
         myTasks: [],
         projects: [
             {
                 projectID: 0,
                 projectTitle: "Black Box",
                 projectTasks: {
                     toDoTasks: [
                         {
                             taskTitle: "First Task",
                             taskDescription: "This is just a really short description of what is going on",
                             taskLabels: ["Development", "Design"],
                             subTasks: [],
                             taskComments: [],
                             taskType: "todo"
                         },
                         {
                             taskTitle: "Second Task",
                             taskDescription: "This is just a really short description of what is going on",
                             taskLabels: ["Development", "Design"],
                             subTasks: [],
                             taskComments: [],
                             taskType: "todo"
                         }
                     ],
                     inProgressTasks: [],
                     stuckTasks: [],
                     completeTasks: []
                 }
             }
         ]
     }))*/


    if (localStorage.getItem("projectmanager") === null) {
        localStorage.setItem('projectmanager', {})
    }


    return (<div className="project-manager-container">

        <div className="side-bar-container">


            <div className="side-bar">

                <div className="side-bar-tasks">

                    <div className="side-bar-tasks-container my-tasks">
                        <div className="side-bar-task-header">My Tasks</div>
                        <div className="side-bar-sub-heading-container">
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0) }}>Today</div>
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0) }}>Upcoming</div>
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0) }}>All</div>
                        </div>

                    </div>


                    <div className="side-bar-tasks-container projects">
                        <div className="side-bar-task-header">Projects</div>
                        <div className="project-sub-heading-container">
                            {projects.projects.map((project) => <ProjectSubHeading text={project.projectTitle} changeView={changeView} data={project} />)}
                        </div>
                    </div>

                </div>


                <div className="projects-list"></div>
            </div>



        </div>

        <div className="main-view-container">

            <div className="main-view">
                {renderState()}

            </div>


        </div>



    </div>);
}

export default ProjectManager;