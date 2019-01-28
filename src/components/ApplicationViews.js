import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import NewsList from './news/NewsList'

export default class ApplicationViews extends Component {
  state = {
    newsitems: []
  }

  getTaskById = () => {
    DataManager.get(1, "tasks").then(allTasks => console.log(allTasks))
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <NewsList newsitems={this.state.newsitems} getTask={this.getTaskById} />
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
                return null
                // Remove null and return the component which will show the user's tasks
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
