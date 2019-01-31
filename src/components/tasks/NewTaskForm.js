import React, { Component } from "react"

export default class NewTaskForm extends Component {

    state = {
        userId: "",
        task: "",
        expectedCompletionDate: "",
        complete: ""
    }

    handleFieldChange = evt => {
        const stateToChange= {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    };

    buildNewTask = evt => {
        let sessionId = sessionStorage.getItem("User")
        evt.preventDefault();
        const task = {
            userId: Number(sessionId),
            task: this.state.task,
            expectedCompletionDate: this.state.expectedCompletionDate,
            complete: false
        }
        this.props.addTask(task)
            .then(()=> this.props.history.push("/tasks"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="form-horizontal">
                <fieldset>
                    <h2> Add New Task</h2>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Task"> Task </label>
                    <div className="col-md-4">
                        <input type="text"
                        className="form-control input-md"
                        required onChange={this.handleFieldChange} id="task" placeholder="Task" />
                    </div>
                    </div>
                    <div>
                        <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Completion Date">Completion Date</label>
                        <div className="col-md-4">
                        <input type="date" required onChange={this.handleFieldChange} id="expectedCompletionDate"
                        className="form-control col-md-9 "/>
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="form-control col-md-1 btn-login" onClick={this.buildNewTask}> Submit </button>
                    </fieldset>
                </form>
            </React.Fragment>

        )
    }
}
