import React, { useEffect, useState } from 'react';
import MyTasks from "../MyTasks/MyTasks"
import ProjectSubHeading from '../ProjectSubHeading/ProjectSubHeading';
import ProjectTasks from "../ProjectTasks/ProjectTasks"
import TaskView from "../TaskView/TaskView"
import AddTaskView from "../AddTaskView/AddTaskView"
import ProjectSettings from "../ProjectSettings/ProjectSettings"

import "./ProjectManager.css"
const ProjectManager = (props) => {

    const [projects, setProjects] = useState({ projects: [] })

    const [viewState, setViewState] = useState(0)

    const [projectData, setProjectData] = useState()
    const [activeTitle, setActiveTitle] = useState("My Tasks");

    const [taskView, setTaskView] = useState(0);
    const [taskData, setTaskData] = useState()
    const [addTaskState, setAddTaskState] = useState(0);
    const [projectMenu, setProjectMenu] = useState(0)
    const [deleteProject, setDeleteProject] = useState(0)



    useEffect(() => {
        if (localStorage.getItem('projectmanager') === null) {
            localStorage.setItem('projectmanager', JSON.stringify({
                myTasks: {
                    todayTasks: [],
                    upcomingTasks: [],
                    previousTasks: []
                },
                projects: [
                    {
                        projectID: 0,
                        projectTitle: "Black Box",
                        projectTasks: [

                            {
                                taskTitle: "First Task",
                                taskDescription: "This is just a really short description of what is going on",
                                taskLabels: ["Development", "Design"],
                                subTasks: [],
                                taskComments: [],
                                taskType: "todo",
                                taskID: Math.floor(Math.random() * 1000)
                            },
                            {
                                taskTitle: "Second Task",
                                taskDescription: "This is just a really short description of what is going on",
                                taskLabels: ["Development", "Design"],
                                subTasks: [],
                                taskComments: [],
                                taskType: "todo",
                                taskID: Math.floor(Math.random() * 1000)
                            }
                            ,
                            {
                                taskTitle: "Smirtk",
                                taskDescription: "This is just a really short description of what is going on",
                                taskLabels: ["Development", "Design"],
                                subTasks: [],
                                taskComments: [],
                                taskType: "in-progress",
                                taskID: Math.floor(Math.random() * 1000)
                            },
                            {
                                taskTitle: "Second Task",
                                taskDescription: "This is just a really short description of what is going on",
                                taskLabels: ["Development", "Design"],
                                subTasks: [],
                                taskComments: [],
                                taskType: "stuck",
                                taskID: Math.floor(Math.random() * 1000)
                            },
                            {
                                taskTitle: "Second Task",
                                taskDescription: "This is just a really short description of what is going on",
                                taskLabels: ["Development", "Design"],
                                subTasks: [],
                                taskComments: [],
                                taskType: "complete",
                                taskID: Math.floor(Math.random() * 1000)
                            }]
                    }

                ]
            }))
            setProjects(JSON.parse(localStorage.getItem('projectmanager')))
        }
        else {
            setProjects(JSON.parse(localStorage.getItem('projectmanager')))
        }


        if(window.screen.width <= 1400){

        }


    }, [])


    function renderSettingsPage(){
        if(viewState === 7){
            return(<ProjectSettings />)
        }
    }




    function renderState() {
        if (viewState === 0 && localStorage.getItem('projectmanager') != null) {
            return (<MyTasks myTasksView={activeTitle} tasks={JSON.parse(localStorage.getItem('projectmanager')).myTasks} />)
        }
        else if (viewState === 1) {


            let todos = [];
            let inProgress = [];
            let stuck = [];
            let complete = []

            let i;
            for (i = 0; i < projectData.projectTasks.length; i++) {

                if (projectData.projectTasks[i].taskType === 'todo') {
                    todos.push(projectData.projectTasks[i])
                }

                if (projectData.projectTasks[i].taskType === 'in-progress') {
                    inProgress.push(projectData.projectTasks[i])
                }

                if (projectData.projectTasks[i].taskType === 'stuck') {
                    stuck.push(projectData.projectTasks[i])
                }
                if (projectData.projectTasks[i].taskType === 'complete') {
                    complete.push(projectData.projectTasks[i])
                }
            }


            return (<ProjectTasks projectData={projectData} todos={todos} inProgress={inProgress} stuck={stuck} complete={complete} openTaskView={changeTaskView} deleteTask={deleteTask} type={0} projectID={projectData.projectID} />)
        }

        else if(viewState === 7){
            return(<ProjectSettings data={projectData} deleteProject={deleteTheProject}/>)
        }

    }


    function renderCreateTask() {
        if (viewState === 0) {
            return ('')
        }
        else {
            return (<div>
                <button className="create-task-button-mobile" onClick={() => { setAddTaskState(1) }}>+</button>
                <button className="create-task-button" onClick={() => { setAddTaskState(1) }}>Create Task +</button>
                </div>)
        }
    }


    function updateProject(updates) {

        setProjectData(updates)
        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        setProjects(storage)

    }

    function changeView(data) {

        setProjectData(data)


        setTaskView(0)
        setActiveTitle(data.projectTitle)
        setViewState(1)

        console.log(data)


    }


    function changeTaskView(data, type) {


        if (data === 'close') {
            setAddTaskState(0)
            setTaskView(0)
        }

        if (type === 0) {
            if (taskView === 1) {
                setTaskView(0)
            }
            else if (taskView === 0) {
                setTaskData(data)
                setTaskView(1)
            }

        }

        if (type === 1) {
            setTaskView(0);
            setTaskData(data);
            setTimeout(() => {
                setTaskView(1);
            }, 10)

        }


    }



    function renderTaskView() {

        if (taskView === 1) {
            return (<TaskView data={taskData} closeTask={changeTaskView} type={0} projectID={projectData.projectID} updateProject={updateProject} setTaskView={setTaskView} />)
        }
        else {
            return ("")
        }
    }



    function renderAddTask() {
        if (addTaskState === 1) {

            return (<AddTaskView data={taskData} new={true} closeTask={changeTaskView} type={0} projectID={projectData.projectID} updateProject={updateProject} />)
        }
    }

    function deleteTask(taskID, projectID, place) {

        let storage = JSON.parse(localStorage.getItem("projectmanager"))

        let j;

        for (j = 0; j < storage.projects.length; j++) {
            if (storage.projects[j].projectID === projectID) {
                let project = storage.projects[j]
                let i;
                for (i = 0; i < project.projectTasks.length; i++) {

                    if (taskID === project.projectTasks[i].taskID) {
                        project.projectTasks.splice(i, 1)
                    }

                }


                storage[projectID] = project
                localStorage.setItem('projectmanager', JSON.stringify(storage))
                setProjectData(storage[projectID])

                setProjects(storage)
            }
        }






        setTimeout(() => { setTaskView(0) }, 1)
    }

    function openProjectDelete() {
        setViewState(7)

    }

    function renderProjectDelete() {
        if (deleteProject === 1) {
            return (<div className="delete-project-button" onClick={deleteTheProject}>X</div>)
        }
        else {
            return ('')
        }
    }

    function deleteTheProject() {

        let storage = JSON.parse(localStorage.getItem('projectmanager'))
        let i;
        for (i = 0; i < storage.projects.length; i++) {
            if (storage.projects[i].projectID === projectData.projectID) {
                storage.projects.splice(i, 1);
                localStorage.setItem('projectmanager', JSON.stringify(storage))
            }
        }

        setProjects(storage)
        setDeleteProject(0)
        setActiveTitle('My Tasks')

        setViewState(0)

    }


    function addProjectMenu() {

        if (projectMenu === 0) {
            setProjectMenu(1)
        }

        else if (projectMenu === 1) {
            setProjectMenu(0)
        }



    }


    function renderAddProject() {

        if (projectMenu === 1) {
            return (<div className="add-project-container"><input className="project-title-input" placeholder="Project Title" /><button onClick={addProject}><i class="fas fa-sign-in-alt"></i></button></div>)
        }

    }





    function addProject() {
        let storage = JSON.parse(localStorage.getItem("projectmanager"))

        let projectTitle = document.querySelector('.project-title-input').value
        storage.projects.push({
            projectID: Math.floor(Math.random() * 5000),
            projectTitle: projectTitle,
            projectTasks: []
        })

        localStorage.setItem('projectmanager', JSON.stringify(storage))
        setProjects(storage)
        addProjectMenu()

    }

    /*localStorage.setItem('projectmanager', JSON.stringify({
        myTasks: 
           { todayTasks: [
               {text: "Test Today Task",
                   ID: Math.floor(Math.random() * 1000),
                   date:  '03'+ '/' + '31' + '/' + '2021'}
           ],
           previousTasks: [{text: "Test Today Task",
           ID: Math.floor(Math.random() * 1000),
           date:  '03'+ '/' + '31' + '/' + '2020'}],
       upcomingTasks: []
   }
        ,
        projects: [
            {
                projectID: 0,
                projectTitle: "Black Box",
                projectTasks: [
 
                    {
                        taskTitle: "First Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "todo",
                        taskID: Math.floor(Math.random() * 1000)
                    },
                    {
                        taskTitle: "Second Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "todo",
                        taskID: Math.floor(Math.random() * 1000)
                    }
                    ,
                    {
                        taskTitle: "Smirtk",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "in-progress",
                        taskID: Math.floor(Math.random() * 1000)
                    },
                    {
                        taskTitle: "Second Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "stuck",
                        taskID: Math.floor(Math.random() * 1000)
                    },
                    {
                        taskTitle: "Second Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "complete",
                        taskID: Math.floor(Math.random() * 1000)
                    }]
            }
 
        ]
    }))*/


    if (localStorage.getItem("projectmanager") === null) {
        //localStorage.setItem('projectmanager', JSON.stringify({});
    }

    function changeSideBar(){

        if(document.querySelector('.side-bar-container') != null){
            document.querySelector('.side-bar-container').className = 'side-bar-container-closed'
        }

        else{
            document.querySelector('.side-bar-container-closed').className = 'side-bar-container'
        }
        
      
    }


    return (<div className="project-manager-container">
           {renderTaskView()}
 <i className="fas fa-bars" onClick={changeSideBar}></i>
        <div className="side-bar-container">


            <div className="side-bar">

                <div className="side-bar-tasks">

                    <div className="side-bar-tasks-container my-tasks">
                   
                        <div className="side-bar-task-header">My Tasks</div>

                        <div className="side-bar-sub-heading-container">
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0); setActiveTitle('Today'); setTaskView(0) }}>Today</div>
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0); setActiveTitle('Upcoming'); setTaskView(0) }}>Upcoming</div>
                            <div className="side-bar-sub-heading" onClick={() => { setViewState(0); setActiveTitle('My Tasks'); setTaskView(0) }}>All</div>
                        </div>
                    </div>


                    <div className="side-bar-tasks-container projects">
                        <div className="side-bar-task-header">Projects</div>
                        <div className="project-sub-heading-container">
                            {projects.projects.map((project) =>
                                <ProjectSubHeading
                                    text={project.projectTitle}
                                    changeView={changeView}
                                    data={project}
                                    projectID={project.projectID}
                                    count={project.projectTasks.length}
                                    key={String(project.projectTitle + project.projectID)} />)}

                            {renderAddProject()}
                            <button className="add-project-button" onClick={addProjectMenu}>Add Project +</button>

                        </div>
                    </div>

                </div>


                <div className="projects-list"></div>
            </div>



        </div>

        <div className="main-view-container">
            <div className="main-view-header"><span>{activeTitle}</span> <i className="fas fa-cog project-settings" onClick={openProjectDelete}></i>{renderProjectDelete()} {renderCreateTask()}</div>

            <div className="main-view">

                {renderState()}
             
                {renderAddTask()}

            </div>


        </div>



    </div>);
}

export default ProjectManager;