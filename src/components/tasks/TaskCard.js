import React, { Component } from "react"
import "./Task.css"

export default class TaskCard extends Component {

    state = {
        checked: false
    }



    handleChange = () => {this.setState({
        checked: !this.state.checked
    })
    this.putChecked();}

    putChecked = () => {
        const task = {
            userId: "",
            task: this.props.task.task,
            expectedCompletionDate: this.props.task.expectedCompletionDate,
            checked: !this.state.checked
        }
        {console.log(task)}
        this.props.putTask(this.props.task.id,task)
        .then(()=> this.props.history.push("/tasks"))
    }

    render() {
        return (
            <div>
            <div key={this.props.task.id}>
                <h4>{this.props.task.task}</h4>
                <p>Completion Date: {this.props.task.expectedCompletionDate}</p></div>
                    Complete <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} id="checkbox"/>
            </div>

        )

    }
}