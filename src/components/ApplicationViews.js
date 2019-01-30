import { Route } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import NewsList from './news/NewsList'
import AddNewsForm from './news/AddNewsForm'
import MessagesList from './messages/MessagesList'
import TaskList from "./tasks/TaskList"
import NewTaskForm from "./tasks/NewTaskForm"
<<<<<<< HEAD
import EventList from './events/EventList';
import AddEvent from "./events/AddEvent";
import EditEvent from './events/EditEvent';
=======
import EditForm from "./tasks/EditForm"

import EventList from './events/EventList'
>>>>>>> master

export default class ApplicationViews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      tasks: [],
      news: [],
      messages: [],
<<<<<<< HEAD
      friends: [],
=======
      friends: []
>>>>>>> master
    }

    this.addEvent = this.addEvent.bind(this)
  }
  componentDidMount () {

    DataManager.getAll("events")
      .then(events => {
        let filteredEvents = [];
        events.forEach(event => {
          let eventObject = {
            id: event.id,
            userId: event.userId,
            eventName: event.eventName,
            eventDate: event.eventDate,
            eventTime: event.eventTime,
            eventLocation: event.eventLocation,
            eventDateTimeString: `${event.eventDate}T${event.eventTime}`
          }
          filteredEvents.push(eventObject)
        });
        let sortedEvents = filteredEvents.sort(function(a,b){
              return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);
        })
        this.setState({events: sortedEvents})})
      .then(() => DataManager.getAll("tasks"))
      .then(tasks => {this.setState({tasks: tasks})})
      .then(() => DataManager.getAll("newsItems"))
      .then(news => {this.setState({news: news})})
      .then(() => DataManager.getAll("messages"))
      .then(messages => {this.setState({messages: messages})})
      .then(() => DataManager.getAll("friends"))
      .then(friends => {this.setState({friends: friends})})
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

    deleteTask = (id, dataset) =>
    DataManager.delete(id, dataset)
    .then(()=> DataManager.getAll("tasks"))
    .then(allTasks => this.setState ({
      tasks: allTasks
    }))

  addNewsArticle = (dataset, newObject) => DataManager.post(dataset, newObject)
    .then(() => DataManager.getAll("newsItems"))
    .then(news => this.setState({
        news: news
    })
    )

  deleteNewsArticle = (id, dataset) =>  DataManager.delete(id, dataset)
    .then(() => DataManager.getAll("newsItems"))
    .then(news => this.setState({
        news: news
    })
    )

  addEvent (eventObject) {
    let dataset = "events"
    DataManager.post(dataset, eventObject)
    .then(() => DataManager.getAll("events"))
    .then(events => {
      let filteredEvents = [];
      events.forEach(event => {
        let eventObject = {
          id: event.id,
          userId: event.userId,
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation,
          eventDateTimeString: `${event.eventDate}T${event.eventTime}`
        }
        filteredEvents.push(eventObject)
      });
      let sortedEvents = filteredEvents.sort(function(a,b){
            return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);
      })
      this.setState({events: sortedEvents})});
  }

  deleteEvent = (id, dataset) =>  DataManager.delete(id, dataset)
    .then(() => DataManager.getAll("events"))
    .then(events => {
      let filteredEvents = [];
      events.forEach(event => {
        let eventObject = {
          id: event.id,
          userId: event.userId,
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation,
          eventDateTimeString: `${event.eventDate}T${event.eventTime}`
        }
        filteredEvents.push(eventObject)
      });
      let sortedEvents = filteredEvents.sort(function(a,b){
            return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);
      })
      this.setState({events: sortedEvents})})

  editEvent = (id, dataset, eventObject) => DataManager.put(id, dataset, eventObject)
  .then(() => DataManager.getAll("events"))
    .then(events => {
      let filteredEvents = [];
      events.forEach(event => {
        let eventObject = {
          id: event.id,
          userId: event.userId,
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation,
          eventDateTimeString: `${event.eventDate}T${event.eventTime}`
        }
        filteredEvents.push(eventObject)
      });
      let sortedEvents = filteredEvents.sort(function(a,b){
            return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);
      })
      this.setState({events: sortedEvents})})

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={props => {
          return <NewsList {...props} news={this.state.news} friends={this.state.friends} deleteNewsArticle={this.deleteNewsArticle} /> }} />

        <Route path="/addnews" render={(props) => {
<<<<<<< HEAD
          return <AddNewsForm {...props} addNewsArticle={this.addNewsArticle} /> }} />

        <Route exact path="/events" render={(props) => {
          return <EventList {...props} events={this.state.events} deleteEvent={this.deleteEvent}/> }}/>

        <Route path="/events/new" render={(props) => {
          return <AddEvent {...props} addEvent={this.addEvent}/> }}/>

        <Route path="/events/editevent/:id" render={(props) => {
          return <EditEvent {...props} events={this.state.events} editEvent={this.editEvent}/> }}/>

        <Route exact path="/tasks" render={props => {
          return <TaskList {...props} tasks={this.state.tasks} /> }}/>

        <Route exact path="/tasks/new" render={props => {
          return <NewTaskForm {...props} tasks={this.state.tasks} /> }}/>

        <Route path="/messages" render={props => {
          return <MessagesList /> }}/>

        <Route path="/friends" render={props => {
          return null }} />

=======
                    return <AddNewsForm {...props}
                    addNewsArticle={this.addNewsArticle} />
                }} />
        <Route
          path="/events" render={props => {
            return <EventList {...props} events={this.state.events} />
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
            return <MessagesList />
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
>>>>>>> master
      </React.Fragment>
    );
  }
}
