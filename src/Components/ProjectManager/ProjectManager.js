import React, { useState } from 'react';
import MyTasks from "../MyTasks/MyTasks"
import ProjectSubHeading from '../ProjectSubHeading/ProjectSubHeading';
import ProjectTasks from "../ProjectTasks/ProjectTasks"
import TaskView from "../TaskView/TaskView"

import "./ProjectManager.css"
const ProjectManager = (props) => {


    const [viewState, setViewState] = useState(0)
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projectmanager')))
    const [projectData, setProjectData] = useState()
    const [activeTitle, setActiveTitle] = useState("My Tasks");
    const[createState, setCreateState] = useState('project');
    const [taskView, setTaskView] = useState(0);
    const [taskData,setTaskData] = useState()
    const [addTaskState, setAddTaskState] = useState(0);


    function renderState() {
        if (viewState === 0) {
            return (<MyTasks />)
        }
        else if (viewState === 1) {
            return (<ProjectTasks projectData={projectData} openTaskView={changeTaskView} type={0}/>)
        }
    }

    function changeView(data) {

        setProjectData(data)
        setTaskData()
        setActiveTitle(data.projectTitle)
        setViewState(1)

    }


    function changeTaskView(data, type){


        if(data === 'close'){
           setAddTaskState(0)
           setTaskView(0)
        }

        if(type === 0){
            if(taskView === 1){
                setTaskView(0)
            }
            else if(taskView === 0){
                setTaskData(data)
                setTaskView(1)
            }
            
        }

        if(type === 1){
            setTaskView(0);
            setTaskData(data);
            setTaskView(1);
        }

      
    }

    function renderTaskView(){

        if(taskView === 1){
        return(<TaskView data={taskData} closeTask={changeTaskView} type={0} />)
        }
        else{
            return("")
        }
    }

    function addTaskSwitch(){

        setAddTaskState(1)

    }


    function renderAddTask(){
        if(addTaskState === 1){
            return(<TaskView new={true} closeTask={changeTaskView} type={0}/>)
        }
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
                     ],
                     inProgressTasks: [{
                        taskTitle: "Smirtk",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "in-progress",
                        taskID: Math.floor(Math.random() * 1000)
                    }],
                     stuckTasks: [{
                        taskTitle: "Second Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "stuck",
                        taskID: Math.floor(Math.random() * 1000)
                    }],
                     completeTasks: [{
                        taskTitle: "Second Task",
                        taskDescription: "This is just a really short description of what is going on",
                        taskLabels: ["Development", "Design"],
                        subTasks: [],
                        taskComments: [],
                        taskType: "complete",
                        taskID: Math.floor(Math.random() * 1000)
                    }]
                 }
             }
         ]
     }))*/


    if (localStorage.getItem("projectmanager") === null) {
        //localStorage.setItem('projectmanager', JSON.stringify({});
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
        <div className="main-view-header">{activeTitle} <button className="create-task-button" onClick={() => {setAddTaskState(1)}}>Create Task +</button></div>
       
            <div className="main-view">
                
                {renderState()}
                {renderTaskView()}
                {renderAddTask()}

            </div>


        </div>



    </div>);
}

export default ProjectManager;