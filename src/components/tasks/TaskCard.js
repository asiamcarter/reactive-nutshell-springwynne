import React, { Component } from "react"
import { Link } from "react-router-dom"
export default class TaskCard extends Component {

    state = {
        complete: true
    }

    handleChange = () => {
        this.setState({
        complete: !this.state.complete
        })
        this.putChecked();
    }

    putChecked = () => {
        const task = {
            userId: this.props.task.userId,
            task: this.props.task.task,
            expectedCompletionDate: this.props.task.expectedCompletionDate,
            complete: this.state.complete
        }
        this.props.putTask(this.props.task.id,task)
            .then(()=> this.props.history.push("/tasks"))
    }

    showChecked = () => {
        let sessionId = sessionStorage.getItem("User")
        if (this.state.complete === true && this.props.task.userId === Number(sessionId))
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
                {this.showChecked()}
            </div>
        )
    }
}