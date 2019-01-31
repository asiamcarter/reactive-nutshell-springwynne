import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import DataManager from '../modules/DataManager'
import "./Nutshell.css";

let userIdQueryString = "";
export default class Nutshell extends Component {

  constructor(props) {
    super(props);

    this.state = {

      events: [],
      tasks: [],
      news: [],
      messages: [],
      friends: [],
      users: [],
      jsonQuery: '',
      results: []

    }
    this.populateAppState = this.populateAppState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.builduserIdQueryString = this.builduserIdQueryString.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      jsonQuery: e.target.value

    }, () => {
    if (this.state.jsonQuery && this.state.jsonQuery.length >1) {
      let filteredResults = [];
      DataManager.getAll("users", `q=${this.state.jsonQuery}`).then(results => {

        results.forEach(result => {

          if ((this.state.friends.map(friend => friend.id).includes(result.id)) === false) {

            filteredResults.push(result)
          }});

        this.setState({results: filteredResults})
      })}
    })
  }

  builduserIdQueryString () {
    let currentUserId = Number(sessionStorage.getItem("User"));
    userIdQueryString = "";
    userIdQueryString += `userId=${currentUserId}`
    this.state.friends.forEach(friend => {
      let friendId = friend.id;
      userIdQueryString += `&&userId=${friendId}`
    })
    console.log(userIdQueryString)
  }
  populateAppState () {
    DataManager.getAll("users")
    .then(users => {this.setState({users: users})})
    .then(() => DataManager.getAll("tasks"))
    .then(tasks => {
      let filteredTasks = tasks.filter(task => {
        return task.complete === false
      })
      this.setState({tasks: filteredTasks})})
    .then(() => DataManager.getAll("messages"))
    .then(messages => {this.setState({messages: messages})})
    .then(() => DataManager.getAll("friends"))
    .then(friends => {
      let currentUser = 1;
      let friendsArray = [];
      friends.forEach(connection => {
        if(currentUser === connection.userId) {
          let foundFriend = this.state.users.find(user => (user.id === connection.otherFriendId))
          friendsArray.push(foundFriend)
        }})
      this.setState({friends: friendsArray},() => this.builduserIdQueryString())})
    .then(() =>DataManager.getAll("events", userIdQueryString))
    .then(events => {
      let filteredEvents = events.map(event =>  {event.eventDateTimeString = `${event.eventDate}T${event.eventTime}`; return event});
      let sortedEvents = filteredEvents.sort(function(a,b){
            return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);})
      this.setState({events: sortedEvents})})
    .then(() => DataManager.getAll("newsItems", userIdQueryString))
    .then(news => {this.setState({news: news})})
  }
  componentDidMount () {

    this.populateAppState();
  }
    registerHere = (username, password) => {
    return DataManager.registerHere(username, password)
    // .then(() => DataManager.getAll("users"))
    // .then(allUsers => this.setState({
    //   users: allUsers}))
    }

    getAllUsers = () => {
      return DataManager.getAll("users", "")
    //  .then(()=> this.populateAppState())
    }

    addUser = user =>
    DataManager.post("users", user)
    .then(() => this.populateAppState())
    .then(()=>this.registerHere(user.username, user.password))

  render() {
    return (
      <React.Fragment>
        <NavBar jsonQuery={this.state.jsonQuery} results={this.state.results} handleInputChange={this.handleInputChange}/>
        <ApplicationViews events={this.state.events} tasks={this.state.tasks} news={this.state.news} messages={this.state.messages} friends={this.state.friends} users={this.state.users} jsonQuery={this.state.jsonQuery} results={this.state.results} handleInputChange={this.handleInputChange} populateAppState={this.populateAppState} registerHere={this.registerHere} getAllUsers={this.getAllUsers} addUser={this.addUser}/>
      </React.Fragment>
    );
  }
}