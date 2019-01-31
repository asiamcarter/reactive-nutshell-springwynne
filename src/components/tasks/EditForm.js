import React, { Component } from "react"
import DataManager from "../../modules/DataManager"
import { throws } from "assert";

export default class EditTaskForm extends Component {
    state = {
        task: "",
        expectedCompletionDate: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTask = evt => {
        evt.preventDefault()
        let sessionId =sessionStorage.getItem("User")
        const existingTask = {
            userId: sessionId,
            task: this.state.task,
            expectedCompletionDate: this.state.expectedCompletionDate,
            complete: false
        }

    this.props.putTask(this.props.match.params.id, existingTask)
    .then(()=> this.props.history.push("/tasks"))}


    componentDidMount() {
        DataManager.getById(this.props.match.params.id, "tasks", "")
        .then(task => {
            this.setState({
                task: task.task,
                expectedCompletionDate: task.expectedCompletionDate

            })
        })
    }

    render() {
        return (
            <React.Fragment>
                    <div>
                        <label htmlFor="Task"> Task </label>
                        <input type="text" required onChange={this.handleFieldChange} id="task" placeholder="Task" value={this.state.task} />
                    </div>
                    <div>
                        <label htmlFor="Completion Date">Completion Date</label>
                        <input type="date" required onChange={this.handleFieldChange} id="expectedCompletionDate" value={this.state.expectedCompletionDate}/>

                    </div>
                    <button type="submit" onClick={this.updateExistingTask}> Submit </button>

            </React.Fragment>

        )
    }
}