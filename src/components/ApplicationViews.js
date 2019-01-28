import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import NewsList from './news/NewsList'


export default class ApplicationViews extends Component {
  constructor(props) {
    super(props)
    this.state = {

      events: [],
      tasks: [],
      news: [],
      messages: []

    }
  }

  componentDidMount () {

      DataManager.getAll("events")
        .then(events => {this.setState({events: events})})
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => {this.setState({tasks: tasks})})
        .then(() => DataManager.getAll("newsItems"))
        .then(news => {this.setState({news: news})})
        .then(() => DataManager.getAll("messages"))
        .then(messages => {this.setState({messages: messages})})
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <NewsList {...props}
            news={this.state.news} />
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
