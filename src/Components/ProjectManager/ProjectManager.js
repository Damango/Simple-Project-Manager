import React from 'react';
import "./ProjectManager.css"
import ProjectCard from './ProjectCard/ProjectCard'


const ProjectManager = (props) => {


    localStorage.setItem('project-manager-simple', JSON.stringify([
        {
            projectText: "Just something really simple",
            projectDescription: "Something really short just to show the description of a project",

            projectAuthor: "Justin Kessler",
            projectDate: "11-30-2020",

            tasks: [
                {
                    taskText: "UI fixes for Front End",
                    taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                    taskLabels: ["Development", "Design"],
                    subTasks: [
                        'Make UI mockup for tasks',
                        'Develop UI interface for submitting Tasks'
                    ],
                    comments: []
                }
            ],
            projectID: 0
        },
        {
            projectText: "Just something really simple",
            projectDescription: "Something really short just to show the description of a project",

            projectAuthor: "Justin Kessler",
            projectDate: "11-30-2020",

            tasks: [{
                taskText: "UI fixes for Front End",
                taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                taskLabels: ["Development", "Design"],
                subTasks: [
                    'Make UI mockup for tasks',
                    'Develop UI interface for submitting Tasks'
                ],
                comments: []
            }],
            projectID: 1
        },
        {
            projectText: "Just something really simple",
            projectDescription: "Something really short just to show the description of a project",

            projectAuthor: "Justin Kessler",
            projectDate: "11-30-2020",

            tasks: [{
                taskText: "UI fixes for Front End",
                taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                taskLabels: ["Development", "Design"],
                subTasks: [
                    'Make UI mockup for tasks',
                    'Develop UI interface for submitting Tasks'
                ],
                comments: []
            }],
            projectID: 2
        },

        {
            projectText: "Just something really simple",
            projectDescription: "Something really short just to show the description of a project",

            projectAuthor: "Justin Kessler",
            projectDate: "11-30-2020",

            tasks: [{
                taskText: "UI fixes for Front End",
                taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                taskLabels: ["Development", "Design"],
                subTasks: [
                    'Make UI mockup for tasks',
                    'Develop UI interface for submitting Tasks'
                ],
                comments: []
            }],
            projectID: 2
        },
        {
            projectText: "Just something really simple",
            projectDescription: "Something really short just to show the description of a project",

            projectAuthor: "Justin Kessler",
            projectDate: "11-30-2020",

            tasks: [{
                taskText: "UI fixes for Front End",
                taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                taskLabels: ["Development", "Design"],
                subTasks: [
                    'Make UI mockup for tasks',
                    'Develop UI interface for submitting Tasks'
                ],
                comments: []
            }],
            projectID: 2
        }

    ]))


    let projects = JSON.parse(localStorage.getItem('project-manager-simple'));


    return (<div className="project-manager-container">

        <div className="project-cards-wrapper">

            {projects.map((projects) => <ProjectCard projectInfo={projects} />)}


        </div>

    </div>);
}

export default ProjectManager;