import React, { useState } from 'react';
import "./ProjectManager.css"
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectView from "./ProjectView/ProjectView"

const ProjectManager = (props) => {


    const [projectView, setProjectView] = useState(0);
    const [createProject, setCreateProject] = useState(0)
    const [projectData, setProjectData] = useState();
    const [projectsDisplay, setProjectsDisplay] = useState(JSON.parse(localStorage.getItem('project-manager-simple')))


    if (localStorage.getItem('project-manager-simple') === null) {
        localStorage.setItem('project-manager-simple', JSON.stringify([
            {
                projectText: "First Project",
                projectDescription: "Short Project Description, Anything Can Go Here!",

                projectAuthor: "Justin Kessler",
                projectDate: "12-30-2020",

                toDoTasks: [
                    {
                        taskType: "todo",
                        taskText: "UI fixes for Front End",
                        taskDescription: "A really short description how you might go about fixing the UI bugs",
                        taskLabels: ["Development", "Design"],

                        subTasks: [
                            {
                                subTaskText: 'Make UI mockup for tasks',
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: 'Develop new Apps',
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    },
                    {
                        taskType: "todo",
                        taskText: "Develop Machine Learning Stuff",
                        taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                        taskLabels: ["Development"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    },
                    {
                        taskType: "todo",
                        taskText: "UI fixes for Front End",
                        taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                        taskLabels: ["Development", "Design"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    }
                ],
                inProgressTasks: [
                    {
                        taskType: "in-progress",
                        taskText: "Making money to Leave Ups",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],
                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    }
                ],
                stuckTasks: [
                    {
                        taskType: "stuck",
                        taskText: "Becoming a millionaire",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    }
                ],
                completedTasks: [
                    {
                        taskType: "completed",
                        taskText: "Gettin LIT",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: [],
                        taskID: Math.floor(Math.random() * 90000)
                    }
                ],
                projectID: 0
            },
            {
                projectText: "Just something really simple",
                projectDescription: "Something really short just to show the description of a project",

                projectAuthor: "Justin Kessler",
                projectDate: "11-30-2020",
                toDoTasks: [
                    {
                        taskText: "UI fixes for Front End",
                        taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                        taskLabels: ["Development", "Design"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: []
                    }
                ],
                inProgressTasks: [
                    {
                        taskText: "Making money to Leave Ups",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: []
                    }
                ],
                stuckTasks: [
                    {
                        taskText: "Becoming a millionaire",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: []
                    }
                ],
                completedTasks: [
                    {
                        taskText: "Gettin LIT",
                        taskDescription: "Just leave UPS its so SIMPLE",
                        taskLabels: ["Life"],

                        subTasks: [
                            {
                                subTaskText: "Creating ML Models",
                                subTaskID: Math.floor(Math.random() * 10000)
                            },
                            {
                                subTaskText: "Develop UI interface for submitting Tasks",
                                subTaskID: Math.floor(Math.random() * 10000)
                            }
                        ],
                        comments: []
                    }
                ],
                projectID: 1
            }

        ]))
    }





    let projects = JSON.parse(localStorage.getItem('project-manager-simple'));


    return (<div className="project-manager-container">

        <div className="project-cards-wrapper">

            {projectsDisplay.map((projects) => <ProjectCard projectInfo={projects} changeProjectView={changeProjectView} key={Math.random() * 1000} />)}
            <button className="create-project-button" onClick={changeCreateProject}>Create Project +</button>
            {displayProjectView()}
            {displayCreateProject()}

        </div>

    </div>);


    function displayCreateProject() {
        if (createProject === 1) {
            return (<div className="create-project-modal">
                <input className="project-name-input" placeholder="Project Name" />
                <button onClick={submitNewProject}>submit</button>
            </div>)
        }
    }

    function submitNewProject() {

        let storage = JSON.parse(localStorage.getItem('project-manager-simple'));
        let i = 0;
        let newProjectName = document.querySelector('.project-name-input').value;
        while (i < storage.length) {
            i++;
        }


        storage.push({
            projectAuthor: "You",
            projectDate: '01-01-2021',
            projectDescription: "Temp Description for now",
            projectID: i,
            projectText: newProjectName,
            inProgressTasks: [],
            toDoTasks: [],
            stuckTasks: [],
            completedTasks: []
        })

        setProjectsDisplay(storage);

        localStorage.setItem('project-manager-simple', JSON.stringify(storage));
    }


    function changeCreateProject() {
        if (createProject === 0) {
            setCreateProject(1)
        }

        else {
            setCreateProject(0)
        }

    }


    function displayProjectView() {

        if (projectView === 1) {



            return (<ProjectView projectData={projectData} closeProjectView={changeProjectView} key={Math.random() * 1000} />)
        }
        else {
            return ''
        }
    }


    function changeProjectView(data) {

        setProjectData(data);
        if (projectView === 1) {
            setProjectView(0);
        }
        else {
            setProjectView(1);
        }
    }
}

export default ProjectManager;