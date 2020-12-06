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
    const [taskSteps, setTaskSteps] = useState();



    return (<animated.div style={taskViewStyle} className="task-view-container">
        <div className="close-task" onClick={closeTask}>X</div>






        <div className="task-view-title">{props.data.taskText}</div>
        <div className="task-view-description">{props.data.taskDescription}</div>
        <div className="task-sub-task-container">
            <div className="sub-task-title">Task Steps</div>
            {props.data.subTasks.map((task) => <SubTasks data={task} />)}
            <button className="create-sub-task-button" onClick={createStep}>Add Step +</button>
            {renderAddStep()}

        </div>
        <div className="task-comments-section">

        </div>

        <button className="move-to-task-button task-view-button">Move To </button>
        <button className="delete-task-button task-view-button" onClick={deleteTask}>Delete</button>


    </animated.div>);




    function createStep() {

        if (addStepView === 0) {
            setAddStepView(1)
        }
        else {
            setAddStepView(0)
        }

    }


    function renderAddStep() {

        if (addStepView === 1) {
            return (<div className="add-step-container">

                <input type="text" placeholder="Step Text" />
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