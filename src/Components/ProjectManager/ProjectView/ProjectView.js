import React, { useState } from 'react';
import TaskCard from "./TaskCard/TaskCard"
import TaskView from "./TaskView/TaskView"
import CreateTaskModal from "./CreateTaskModal/CreateTaskModal"
import "./ProjectView.css"
const ProjectView = (props) => {

    const [todos, setTodos] = useState(props.projectData.toDoTasks);
    let [inProgress, setInProgress] = useState(props.projectData.inProgressTasks);
    let [stuck, setStuck] = useState(props.projectData.stuckTasks);
    let [completed, setCompleted] = useState(props.projectData.completedTasks);

    let [changeNumber, setChangeNumber] = useState(0)

    let [taskView, setTaskView] = useState(0);
    let [taskData, setTaskData] = useState();
    let [createTask, setCreateTask] = useState(0);





    return (<div className="project-view-container" >
        <div className="close-project-view-button" onClick={closeProjectView}>X</div>
        <div className="project-view-wrapper">

            <div className="project-title"> {props.projectData.projectText}</div>
            <div className="task-cards-container">
                <div className="task-todos tasks-container">
                    {todos.map((todo) => <TaskCard taskData={todo} changeTaskView={changeTaskView} />)}
                    <button className="create-task-button" onClick={openCreateTask}>Create Task +</button>
                </div>
                <div className="task-in-progress tasks-container"></div>
                <div className="task-stuck tasks-container"></div>
                <div className="task-complete tasks-container"></div>

            </div>
        </div>
        {renderCreateTask()}
        {renderTaskView()}
    </div>);


    function openCreateTask() {
        if (createTask === 0) {
            setCreateTask(1);
        }
        else { setCreateTask(0) }
    }

    function addNewTask(data) {
        setTodos(data);
        setChangeNumber(changeNumber + 1)
    }

    function deleteTask(data) {


        let storage = JSON.parse(localStorage.getItem('project-manager-simple'));
        let i;
        let oldList;
        if (data.taskType === 'todo') {
            oldList = props.projectData.toDoTasks;

            for (i = 0; i < oldList.length; i++) {
                if (oldList[i].taskID === data.taskID) {
                    oldList.splice(i, 1);
                }
            }
            storage[props.projectData.projectID].toDoTasks = oldList;

            setTodos(oldList);
            setChangeNumber(changeNumber + 2);
            setTaskView(0)

            localStorage.setItem('project-manager-simple', JSON.stringify(storage));
        }


    }

    function closeCreateModal() {
        setCreateTask(0)
    }

    function renderCreateTask() {
        if (createTask === 1) {
            return (<CreateTaskModal projectID={props.projectData.projectID} oldTaskList={props.projectData.toDoTasks} addNewTask={addNewTask} closeModal={closeCreateModal} />)
        }
    }
    function closeProjectView() {
        props.closeProjectView();
    }

    function changeTaskView(data) {
        setTaskData(data);
        setTaskView(0)
        setTimeout(function () {
            setTaskView(1);
        }, 1)

    }

    function renderTaskView() {
        if (taskView === 1) {
            return (<TaskView data={taskData} closeTaskView={closeTaskView} deleteTask={deleteTask} />)
        }
        else {
            return ''
        }
    }

    function closeTaskView() {
        setTaskView(0)
    }
}

export default ProjectView;