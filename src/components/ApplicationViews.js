import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import TaskList from "./TaskList"

export default class ApplicationViews extends Component {

  state = {
    tasks: ""
  }

  componentDidMount() {
    DataManager.getAll("tasks").then(allTasks => {
      this.setState({
        tasks: allTasks
      });
    });
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />
        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />
            <Route
              path="/tasks" render={props => {
                return <TaskList {...props}
                tasks={this.state.tasks} />
              }}
            />
        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />
      </React.Fragment>
    );
  }
}
