import React, { Component } from "react"
import { Link } from "react-router-dom"
export default class TaskCard extends Component {

    state = {
        checked: ""
    }

    handleChange = () => {
        this.setState({
        checked: !this.state.completed
        })
        this.putChecked();
    }

    putChecked = () => {
        const task = {
            userId: this.props.task.userId,
            task: this.props.task.task,
            expectedCompletionDate: this.props.task.expectedCompletionDate,
            checked: !this.state.checked
        }
        this.props.putTask(this.props.task.id,task)
            .then(()=> this.props.history.push("/tasks"))
    }

    hideChecked = () => {
        let sessionId = sessionStorage.getItem("User")
        if (!this.state.checked && this.props.task.userId === Number(sessionId))
            {
                return (
                    <div>
                        <h4>{this.props.task.task}</h4>
                        <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                        <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/></p>
                        <Link to={`/tasks/${this.props.task.id}/edit`}>Edit</Link>
                        </div>
                        )

            }
     }

    render() {
        return (
            <div>
                {this.hideChecked()}
                {/* {this.displayTasks()} */}
            </div>
        )
    }
}