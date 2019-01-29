import React, { Component } from "react"
import "./Task.css"

export default class TaskCard extends Component {

    state = {
        checked: ""
    }
    handleChange = () => {
        this.setState({
        checked: !this.state.checked
    })
    this.putChecked();
    console.log(this.props.task.id)
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

    deleteChecked = () => {
        this.props.deleteTask(this.props.task.id)
        }


    render() {
        return (
            <div>
            <div>
                <h4>{this.props.task.task}</h4>
                <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                    Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/>
                {/* <button onClick={()=> this.props.deleteTask(this.props.task.id)}> Remove </button> */}
                </div>
            </div>
        )

     }
}