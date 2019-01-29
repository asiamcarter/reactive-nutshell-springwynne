import React, { Component } from "react"
import "./Task.css"
import { Link } from "react-router-dom"

export default class TaskCard extends Component {

    state = {
        completed: ""
    }
    handleChange = () => {
        this.setState({
        completed: !this.state.completed
    })
    let sessionId = sessionStorage.getItem("User")
    console.log(this.props.task.userId, sessionId)
    this.putChecked();
    // this.hideChecked();
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

    // deleteChecked = () => {
    //     this.props.deleteTask(this.props.task.id, "tasks")
    //     }

    hideChecked = () =>
    {
        let sessionId = sessionStorage.getItem("User")
        console.log("USERID:",this.props.task.userId, "SESSION:", sessionId)
        if (this.props.task.userId === Number(sessionId)) {
            return (
                <div>
                    <h4>{this.props.task.task}</h4>
                    <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                    <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/></p>
                    <Link to={`/tasks/${this.props.task.id}/edit`}>Edit</Link>
                    </div>
                    )

        }
        // if (!this.state.checked) {
        //     return (
        //         <div>
        //             <h4>{this.props.task.task}</h4>
        //             <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
        //             <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/></p>
        //             <Link to={`/tasks/${this.props.task.id}/edit`}>Edit</Link>
        //             </div>
        //     )
        // }
     }

    //  displayTasks = () => {

    //    if (this.props.task.userId === sessionId) {
    //     return (
    //         <div>
    //             <h4>{this.props.task.task}</h4>
    //             <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
    //             <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.task.id}/></p>
    //             <Link to={`/tasks/${this.props.task.id}/edit`}>Edit</Link>
    //             </div>
    //     )
    //    }


    //  }

    render() {
        return (
            <div>
                {this.hideChecked()}
                {/* {this.displayTasks()} */}
            </div>
        )

     }
}