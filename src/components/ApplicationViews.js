import EventList from './events/EventList';
import AddEvent from "./events/AddEvent";
import EditEvent from './events/EditEvent';
import Friends from "./friends/FriendsList";
import FriendSearchResults from './friends/FriendSearchResults'
import DataManager from "../modules/DataManager"
import React, { Component } from "react"
import { Route } from "react-router-dom"
import TaskList from "../components/tasks/TaskList"
import NewTaskForm from "../components/tasks/NewTaskForm"
import MessagesList from "./messages/MessagesList"
import Register from "./userlogin/Register"
import Login from "./userlogin/Login"
import NewsList from "./news/NewsList"
import AddNewsForm from "./news/AddNewsForm"

export default class ApplicationViews extends Component {

  addFriend = friend => DataManager.post("friends", friend).then(this.props.populateAppState())

  deleteFriend = (id, dataset) => DataManager.delete(id, "friends").then(this.props.populateAppState())

  addTask = task => DataManager.post("tasks", task).then(this.props.populateAppState())

  putTask = (id, task) => DataManager.put(id, "tasks", task).then(this.props.populateAppState())

  deleteTask = (id, dataset) => DataManager.delete(id, dataset).then(this.props.populateAppState())

  addNewsArticle = (dataset, newObject) => DataManager.post(dataset, newObject).then(this.props.populateAppState())

  deleteNewsArticle = (id, dataset) =>  DataManager.delete(id, dataset).then(this.props.populateAppState())

  addEvent = event => DataManager.post("events", event).then(this.props.populateAppState())

  deleteEvent = (id, dataset) =>  DataManager.delete(id, dataset).then(this.props.populateAppState())

  editEvent = (id, dataset, eventObject) => DataManager.put(id, dataset, eventObject).then(this.props.populateAppState())

render() {
  return (
  <React.Fragment>

  <Route exact path="/events" render={(props) => {
    return <EventList {...props} events={this.props.events} deleteEvent={this.deleteEvent} friends={this.props.friends}/> }}/>

  <Route path="/events/new" render={(props) => {
    return <AddEvent {...props} addEvent={this.addEvent}/> }}/>

  <Route path="/events/editevent/:id" render={(props) => {
    return <EditEvent {...props} events={this.props.events} editEvent={this.editEvent}/> }}/>

  <Route exact path="/tasks" render={props => {
    return <TaskList {...props} tasks={this.props.tasks} putTask={this.putTask}/> }}/>

  <Route exact path="/tasks/new" render={props => {
    return <NewTaskForm {...props} tasks={this.props.tasks} addTask={this.addTask}/> }}/>

  <Route path="/messages" render={props => {
    return <MessagesList /> }}/>

  <Route exact path="/friends" render={(props) => {
    return <Friends {...props} friends={this.props.friends} deleteFriend={this.deleteFriend} findFriends={this.findFriends}/>}} />
  <Route path="/friends/searchresults" render={(props) => {
    return <FriendSearchResults {...props} jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange} addFriend={this.addFriend}/>}} />
<Route path="/register" render={props => {
    return <Register {...props} addUser={this.props.addUser} users={this.props.users} registerHere={this.props.registerHere} getAll={this.props.getAllUsers}/>} }/>

<Route exact path="/" render={props => {
    return <Login {...props} registerHere={this.props.registerHere} />}}/>

<Route exact path="/news" render={props => {
return <NewsList {...props} news={this.props.news} friends={this.props.friends} deleteNewsArticle={this.deleteNewsArticle} /> }} />

<Route path="/addnews" render={(props) => {
      return <AddNewsForm {...props} addNewsArticle={this.addNewsArticle} /> }} />

</React.Fragment>

    );


}}
