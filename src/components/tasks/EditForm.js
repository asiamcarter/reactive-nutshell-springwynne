import React, { Component } from "react"
import DataManager from "../../modules/DataManager"


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
        let sessionId =Number(sessionStorage.getItem("User"))
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
                <form className="form-horizontal">
                <fieldset>

                        <h2 className="h2EditTask">Edit Task</h2>
                        <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Task"> Task </label>
                        <div className="col-md-4">
                        <input type="text" required onChange={this.handleFieldChange}
                        className="form-control input-md"
                        id="task" placeholder="Task" value={this.state.task} />
                        </div>

                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label"htmlFor="Completion Date">
                        Completion Date</label>
                        <div className="col-md-4">
                        <input type="date"required onChange={this.handleFieldChange} id="expectedCompletionDate" className="form-control col-md-9 " value={this.state.expectedCompletionDate}/>
                        </div>

                    </div>
                    <button type="submit" className="btn-login" onClick={this.updateExistingTask}> Submit </button>
                </fieldset>
                </form>

            </React.Fragment>

        )
    }
}