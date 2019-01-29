import { Route } from "react-router-dom";
import React, { Component } from "react";
import DataManager from "../modules/DataManager"
import EventList from "./events/EventList";


export default class ApplicationViews extends Component {

  constructor() {
    super()
    this.state = {
        events: [],
        tasks: [],
        news: [],
        messages: [],
        users: []
    }
    this.userLogin = this.userLogin.bind(this)
  }

  userLogin() {

    sessionStorage.setItem("userId", 1)
  }
  componentDidMount () {

    let currentUser = 1;
    DataManager.connectToData({dataSet: 'events', fetchType: 'GET', embedItem: ""})
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

      .then(() => DataManager.connectToData({dataSet: 'tasks', fetchType: 'GET', embedItem: `?userId=${currentUser}`}))
      .then(tasks => {this.setState({tasks: tasks})})
      .then(() => DataManager.connectToData({dataSet: 'newsItems', fetchType: 'GET', embedItem: `?userId=${currentUser}`}))
      .then(news => {this.setState({news: news})})
      .then(() => DataManager.connectToData({dataSet: 'messages', fetchType: 'GET', embedItem: `?userId=${currentUser}`}))
      .then(messages => {this.setState({messages: messages})})
      .then(() => DataManager.connectToData({dataSet: 'users', fetchType: 'GET', embedItem: `?userId=${currentUser}`}))
      .then(users => {this.setState({users: users})})

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
            return <EventList {...props} events={this.state.events} />
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
