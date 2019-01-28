import React, { Component } from "react"
import TaskCard from "./TaskCard"


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
                </div>
                <section className="tasks">
                    {this.props.tasks.map(task=>(
                        <TaskCard key={task.id} task={task} {...this.props} />
                    ))}
                </section>
            </React.Fragment>
        );
    }
}