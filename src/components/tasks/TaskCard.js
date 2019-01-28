import React, { Component } from "react"
import "./Task.css"

export default class TaskCard extends Component {

    state = {
        checked: false
    }

    handleChange = () => this.setState({
        checked: !this.state.checked
    })

    render() {
        const hidden = !this.state.checked ? '' : 'hidden';
        return (
            <div key={this.props.task.id} className= { hidden }>
                <h4>{this.props.task.task}</h4>
                <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                <div>
                    Complete <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} id="checkbox"/>

                </div>
                <p>{this.props.task.complete}</p>
            </div>
        )
    }
}