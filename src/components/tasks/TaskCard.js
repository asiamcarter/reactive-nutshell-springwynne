import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TaskCard extends Component {
    render() {
        return (
            <div key={this.props.task.id} className="taskcard">
                <h4>{this.props.task.task}</h4>
                <p>Completion Date: {this.props.task.expectedCompletionDate}</p>
                <p>{this.props.task.complete}</p>
            </div>
        )
    }
}