import React, { Component } from "react"
import TaskCard from "./TaskCard"
export default class TaskList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="taskList">
                <h1>Tasks</h1>
                    <button
                        type="button"
                        className="btn btn-login"
                        onClick={()=> {
                            this.props.history.push("/tasks/new");
                        }}
                        >
                        Add Task
                    </button>
                    </div>


                    {this.props.tasks.map(task=> (
                        <div key ={task.id}>
                        <TaskCard task={task} {...this.props} />
                        </div>
                    ))}

            </React.Fragment>
        );
    }
}