import { Route } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import TaskList from "./tasks/TaskList"
import NewTaskForm from "./tasks/NewTaskForm"
import EditForm from "./tasks/EditForm"


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

  addTask = task =>
    DataManager.post("tasks", task)
    .then(() => DataManager.getAll("tasks"))
    .then(allTasks => this.setState({
      tasks: allTasks
    }))

    putTask = (id, task) =>
    DataManager.put(id, "tasks", task)
    .then(()=> DataManager.getAll("tasks"))
    .then(allTasks => this.setState({
      tasks: allTasks
    }))

    // deleteTask = (id) =>
    // DataManager.delete(id, "tasks")
    // .then(()=> DataManager.getAll("tasks", ""))
    // .then(allTasks => this.setState ({
    //   tasks: allTasks
    // }))

    deleteTask = id => {
      return fetch(`http://localhost:5002/tasks/${id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(() => fetch(`http://localhost:5002/tasks`))
        .then(response => response.json())
        .then(allTasks =>
          this.setState({
            tasks: allTasks
          })
        );
    };

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
              exact path="/tasks" render={props => {
                return <TaskList {...props}
                tasks={this.state.tasks}
                putTask={this.putTask}
                deleteTask={this.deleteTask} />
              }}
            />
            <Route
               exact path="/tasks/new" render={props => {
                return <NewTaskForm {...props}
                tasks={this.state.tasks}
                addTask={this.addTask} />
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

        <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <EditForm {...props} putTask={this.putTask}/>
          }}
        />
      </React.Fragment>
    );
  }
}
