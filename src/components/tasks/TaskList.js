import React, { Component } from "react"
import TaskCard from "./TaskCard"
import { Link } from "react-router-dom"


export default class TaskList extends Component {

    render() {
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

                    {this.props.tasks.map(task=>(
                        <div>
                        <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
                        <TaskCard key={task.id} task={task} {...this.props} />

                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}