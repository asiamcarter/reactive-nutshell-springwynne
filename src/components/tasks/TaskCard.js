import React, { Component } from "react"
import "./Task.css"

export default class TaskCard extends Component {

    state = {
        checked: false
    }
    handleChange = () => {this.setState({
        checked: !this.state.checked
    })
    this.putChecked();
    // this.deleteChecked();
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

    // deleteChecked = (id) => {
    //     if(this.props.task.checked) {
    //         this.props.deleteTask(id);
    //         console.log(this.props.task.id)
    //     }
    // }

    render() {
        return (
            <div>
            <div key={this.props.task.id}>
                <h4>{this.props.task.task}</h4>
                <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                    Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/>
                </div>
            </div>
        )

     }
}