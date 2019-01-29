import React, { Component } from "react"
import "./Task.css"
import { Link } from "react-router-dom"

export default class TaskCard extends Component {

    state = {
        checked: ""
    }
    handleChange = () => {
        this.setState({
        checked: !this.state.checked
    })
    this.putChecked();
    // this.hideChecked();
    }

    putChecked = () => {
        const task = {
            userId: "",
            task: this.props.task.task,
            expectedCompletionDate: this.props.task.expectedCompletionDate,
            checked: !this.state.checked
        }
        this.props.putTask(this.props.task.id,task)
        .then(()=> this.props.history.push("/tasks"))
    }

    // deleteChecked = () => {
    //     this.props.deleteTask(this.props.task.id, "tasks")
    //     }

    hideChecked = () => {
        if (!this.state.checked ) {
            return (
                <div>
                    <h4>{this.props.task.task}</h4>
                    <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                    <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/></p>
                    <Link to={`/tasks/${this.props.task.id}/edit`}>Edit</Link>
                    </div>
            )
        } else {

        }
     }

    render() {
        return (
            <div>
                {this.hideChecked()}
            </div>
        )

     }
}