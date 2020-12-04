import React, { useState } from 'react';
import "./ProjectManager.css"
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectView from "./ProjectView/ProjectView"

const ProjectManager = (props) => {


    const [projectView, setProjectView] = useState(0);
    const [projectData, setProjectData] = useState();


    /* localStorage.setItem('project-manager-simple', JSON.stringify([
         {
             projectText: "Just something really simple",
             projectDescription: "Something really short just to show the description of a project",
 
             projectAuthor: "Justin Kessler",
             projectDate: "11-30-2020",
 
             toDoTasks: [
                 {
                     taskType: "todo",
                     taskText: "UI fixes for Front End",
                     taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                     taskLabels: ["Development", "Design"],
 
                     subTasks: [
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 0
                 },
                 {
                     taskType: "todo",
                     taskText: "Develop Machine Learning Stuff",
                     taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                     taskLabels: ["Development"],
 
                     subTasks: [
                         'Creating ML Models',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 1
                 },
                 {
                     taskType: "todo",
                     taskText: "UI fixes for Front End",
                     taskDescription: "A reallt short description how you might go about fixing the UI bugs",
                     taskLabels: ["Development", "Design"],
 
                     subTasks: [
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 2
                 }
             ],
             inProgressTasks: [
                 {
                     taskType: "in-progress",
                     taskText: "Making money to Leave Ups",
                     taskDescription: "Just leave UPS its so SIMPLE",
                     taskLabels: ["Life"],
 
                     subTasks: [
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 0
                 }
             ],
             stuckTasks: [
                 {
                     taskType: "stuck",
                     taskText: "Becoming a millionaire",
                     taskDescription: "Just leave UPS its so SIMPLE",
                     taskLabels: ["Life"],
 
                     subTasks: [
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 0
                 }
             ],
             completedTasks: [
                 {
                     taskType: "completed",
                     taskText: "Gettin LIT",
                     taskDescription: "Just leave UPS its so SIMPLE",
                     taskLabels: ["Life"],
 
                     subTasks: [
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: [],
                     taskID: 0
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
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
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
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
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
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
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
                         'Make UI mockup for tasks',
                         'Develop UI interface for submitting Tasks'
                     ],
                     comments: []
                 }
             ],
             projectID: 1
         }
 
     ]))*/


    let projects = JSON.parse(localStorage.getItem('project-manager-simple'));


    return (<div className="project-manager-container">

        <div className="project-cards-wrapper">

            {projects.map((projects) => <ProjectCard projectInfo={projects} changeProjectView={changeProjectView} />)}
            {displayProjectView()}

        </div>

    </div>);


    function displayProjectView() {

        if (projectView === 1) {



            return (<ProjectView projectData={projectData} closeProjectView={changeProjectView} />)
        }
        else {
            return ''
        }
    }


    function changeProjectView(data) {
        console.log(data);
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