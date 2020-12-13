import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./TaskView.css"
import SubTasks from "./SubTasks/SubTasks"
const TaskView = (props) => {

    let taskViewStyle = useSpring({
        from: { height: 0 }, to: {
            height: 800
        }
    })

    const [addStepView, setAddStepView] = useState(0);
    const [moveToView, setMoveToView] = useState(0);
    const [taskSteps, setTaskSteps] = useState(props.data.subTasks);



    return (<animated.div style={taskViewStyle} className="task-view-container">
        <div className="close-task" onClick={closeTask}>X</div>






        <div className="task-view-title">{props.data.taskText}</div>
        <div className="task-view-description">{props.data.taskDescription}</div>
        <div className="task-sub-task-container">
            <div className="sub-task-title">Task Steps</div>
            <div className="sub-task-viewer">
                <div className="sub-task-view-selector">Open</div>
                <div className="sub-task-view-selector">Archived</div>
            </div>
            {taskSteps.map((task) => <SubTasks data={task} taskID={props.data.taskID} projectID={props.projectID} removeStep={removeStep} />)}
            <button className="create-sub-task-button" onClick={createStep}>Add Step +</button>
            {renderAddStep()}

        </div>
        <div className="task-comments-section">

        </div>
        {renderMoveOptions()}
        <button className="move-to-task-button task-view-button" onClick={changeTaskView}>Move To </button>
        <button className="delete-task-button task-view-button" onClick={deleteTask}>Delete</button>


    </animated.div>);



    function renderMoveOptions() {
        if (moveToView === 1) {
            return (<div className="move-buttons-container">
                <button className="in-progress-button change-button" onClick={() => { moveTask('in-progress') }}>In Progress</button>
                <button className="stuck-button change-button" onClick={() => { moveTask('stuck') }}>Stuck</button>
                <button className="complete-button change-button" onClick={() => { moveTask('complete') }}>Complete</button>
            </div>)
        }
    }

    function changeTaskView() {
        setMoveToView(1)
    }

    function moveTask(taskArea) {



    }


    function createStep() {

        if (addStepView === 0) {
            setAddStepView(1)
        }
        else {
            setAddStepView(0)
        }

    }

    function addStep() {
        let i;
        let largeOldData = JSON.parse(localStorage.getItem('project-manager-simple'));
        let oldData = JSON.parse(localStorage.getItem('project-manager-simple'));

        let oldTaskView;
        let newTaskView;
        let newStepData = {
            subTaskText: document.querySelector('.add-step-input').value,
            subTaskID: Math.floor(Math.random() * 10000)
        }
        let stepText = document.querySelector('.add-step-input').value;
        oldData = oldData[props.projectID];



        if (props.data.taskType === 'todo') {

            for (i = 0; i < oldData.toDoTasks.length; i++) {
                if (oldData.toDoTasks[i].taskID === props.data.taskID) {
                    oldTaskView = oldData.toDoTasks[i];
                    oldTaskView.subTasks.push(newStepData);
                    newTaskView = oldTaskView;
                    oldData.toDoTasks[i] = oldTaskView;
                    largeOldData[props.projectID].toDoTasks[i] = newTaskView;
                    localStorage.setItem('project-manager-simple', JSON.stringify(largeOldData));
                    setTaskSteps(newTaskView.subTasks);
                }
            }
        }

        if (props.data.taskType === 'in-progress') {

            for (i = 0; i < oldData.inProgressTasks.length; i++) {
                if (oldData.inProgressTasks[i].taskID === props.data.taskID) {
                    oldTaskView = oldData.inProgressTasks[i];
                    oldTaskView.subTasks.push(newStepData);
                    newTaskView = oldTaskView;
                    oldData.toDoTasks[i] = oldTaskView;
                    largeOldData[props.projectID].inProgressTasks[i] = newTaskView;
                    localStorage.setItem('project-manager-simple', JSON.stringify(largeOldData));
                    setTaskSteps(newTaskView.subTasks);
                }
            }
        }

        if (props.data.taskType === 'stuck') {

            for (i = 0; i < oldData.stuckTasks.length; i++) {
                if (oldData.stuckTasks[i].taskID === props.data.taskID) {
                    oldTaskView = oldData.stuckTasks[i];
                    oldTaskView.subTasks.push(newStepData);
                    newTaskView = oldTaskView;
                    oldData.stuckTasks[i] = oldTaskView;
                    largeOldData[props.projectID].stuckTasks[i] = newTaskView;
                    localStorage.setItem('project-manager-simple', JSON.stringify(largeOldData));
                    setTaskSteps(newTaskView.subTasks);
                }
            }
        }



        if (props.data.taskType === 'completed') {

            for (i = 0; i < oldData.completedTasks.length; i++) {
                if (oldData.completedTasks[i].taskID === props.data.taskID) {
                    oldTaskView = oldData.completedTasks[i];
                    oldTaskView.subTasks.push(newStepData);
                    newTaskView = oldTaskView;
                    oldData.completedTasks[i] = oldTaskView;
                    largeOldData[props.projectID].completedTasks[i] = newTaskView;
                    localStorage.setItem('project-manager-simple', JSON.stringify(largeOldData));
                    setTaskSteps(newTaskView.subTasks);
                }
            }
        }


    }

    function removeStep(data) {
        setTaskSteps(data.subTasks);
        console.log(data.subTasks);
    }


    function renderAddStep() {



        if (addStepView === 1) {

            return (<div className="add-step-container">

                <input className="add-step-input" type="text" placeholder="Step Text" />
                <button className="add-step-button" onClick={addStep}>Add</button>
            </div>)
        }
        else {
            return ''
        }
    }




    function deleteTask() {
        props.deleteTask(props.data)
    }



    function closeTask() {
        props.closeTaskView();
    }
}

export default TaskView;