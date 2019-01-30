// import { Route } from "react-router-dom";
// import React, { Component } from "react";
// import DataManager from "../modules/DataManager"
// import NewsList from './news/NewsList'
// import AddNewsForm from './news/AddNewsForm'
// import MessagesList from './messages/MessagesList'
// import TaskList from "./tasks/TaskList"
// import NewTaskForm from "./tasks/NewTaskForm"
// import EditForm from "./tasks/EditForm"
// import EventList from './events/EventList'
// import Register from "./userlogin/Register"
// import Login from "./userlogin/Login"

// export default class ApplicationViews extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       events: [],
//       tasks: [],
//       news: [],
//       messages: [],
//       friends: [],
//       users: []
//     }
//   }
//   componentDidMount () {

//     DataManager.getAll("events")
//       .then(events => {
//         let filteredEvents = [];
//         events.forEach(event => {
//           let eventObject = {
//             id: event.id,
//             userId: event.userId,
//             eventName: event.eventName,
//             eventDate: event.eventDate,
//             eventTime: event.eventTime,
//             eventLocation: event.eventLocation,
//             eventDateTimeString: `${event.eventDate}T${event.eventTime}`
//           }
//           filteredEvents.push(eventObject)
//         });
//         let sortedEvents = filteredEvents.sort(function(a,b){
//               return new Date(a.eventDateTimeString) - new Date(b.eventDateTimeString);
//         })
//         this.setState({events: sortedEvents})})
//       .then(() => DataManager.getAllTasks())
//       .then(tasks => {this.setState({tasks: tasks})})
//       .then(() => DataManager.getAll("newsItems"))
//       .then(news => {this.setState({news: news})})
//       .then(() => DataManager.getAll("messages"))
//       .then(messages => {this.setState({messages: messages})})
//       .then(() => DataManager.getAll("friends"))
//       .then(friends => {this.setState({friends: friends})})
//   }

//   registerHere = (username, password) => {
//     return DataManager.registerHere(username, password)
//     // .then(() => DataManager.getAll("users"))
//     // .then(allUsers => this.setState({
//     //   users: allUsers}))
//     }

//   addTask = task =>
//     DataManager.post("tasks", task)
//     .then(() => DataManager.getAll("tasks"))
//     .then(allTasks => this.setState({
//       tasks: allTasks
//     }))

//     addUser = user =>
//     DataManager.post("users", user)
//     .then(() => DataManager.getAll("tasks"))
//     .then(allTasks => this.setState({
//       tasks: allTasks
//     }))

//     putTask = (id, task) =>
//     DataManager.put(id, "tasks", task)
//     .then(()=> DataManager.getAll("tasks"))
//     .then(allTasks => this.setState({
//       tasks: allTasks
//     }))

//     deleteTask = (id, dataset) =>
//     DataManager.delete(id, dataset)
//     .then(()=> DataManager.getAll("tasks"))
//     .then(allTasks => this.setState ({
//       tasks: allTasks
//     }))

//   addNewsArticle = (dataset, newObject) => DataManager.post(dataset, newObject)
//     .then(() => DataManager.getAll("newsItems"))
//     .then(news => this.setState({
//         news: news
//     })
//     )

//   deleteNewsArticle = (id, dataset) =>  DataManager.delete(id, dataset)
//     .then(() => DataManager.getAll("newsItems"))
//     .then(news => this.setState({
//         news: news
//     }))

//     getAllUsers = () => {
//       return DataManager.getAll("users")
//       // .then(allUsers=> this.setState({
//       //   users: allUsers
//       // }))
//     }
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


      // <React.Fragment>
/*
        <Route exact path="/" render={props => {
          return <NewsList {...props} news={this.props.news} friends={this.props.friends} deleteNewsArticle={this.deleteNewsArticle} /> }} />

        <Route path="/addnews" render={(props) => {
                    return <AddNewsForm {...props}
                    addNewsArticle={this.addNewsArticle} />
                }} /> */
        /* <Route
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

        <Route
        path="/register" render={props => {
          return <Register {...props}
          addUser={this.addUser}
          tasks={this.state.tasks}
          registerHere={this.registerHere}
          getAll={this.getAllUsers}/>
        }}
        />
        // <Route
        // path="/login" render={props => {
        //   return <Login {...props}
        //   registerHere={this.registerHere} />
        // }}
        // /> */
          // return <AddNewsForm {...props} addNewsArticle={this.addNewsArticle} /> }} />
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
          return <Register {...props} addUser={this.props.addUser} tasks={this.props.tasks} registerHere={this.props.registerHere} getAll={this.props.getAllUsers}/>}}/>
        <Route path="/login" render={props => {
          return <Login {...props} registerHere={this.props.registerHere} />}}/>

      </React.Fragment>

    );


}}
