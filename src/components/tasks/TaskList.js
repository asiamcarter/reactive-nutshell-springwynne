import React, { Component } from "react"
import TaskCard from "./TaskCard"

export default class TaskList extends Component {

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <h1>Tasks</h1>
                {/* Create "Add Task" Button */}
                <div className="addTaskButton">
                    <button
                        type="button"
                        onClick={()=> {
                            this.props.history.push("/tasks/new");
                        }}
                        >
                        Add Task
                    </button>

                    {this.props.tasks.map(task=> (
                        <div key ={task.id}>
                        {/* <Link to={`/tasks/${task.id}/edit`}>Edit</Link> */}
                        <TaskCard task={task} {...this.props} />
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}