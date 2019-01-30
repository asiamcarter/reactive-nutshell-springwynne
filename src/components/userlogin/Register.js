import React, { Component } from "react"
// import { Link } from "react-router-dom

export default class Register extends Component {

    state = {
        userName: "",
        email: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange= {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
        // console.log(stateToChange)
    };

    getAllUsers = evt => {
        evt.preventDefault();
       this.props.getAll()
       .then(allUsers => {
           let usersArray = allUsers.filter(user => {
               console.log(this.state.userName)
               return (user.userName === this.state.userName)
           })
           console.log("USER ARRAY:", usersArray)
           if (usersArray.length > 0) {
               alert("Sorry, this username is taken!")
           }
          else {
              alert("You're in!")
              allUsers.forEach(user => {
                sessionStorage.setItem("User", user.id);
                let sessionUser = sessionStorage.getItem("User")
                console.log(sessionUser)
                  const newUser = {
                    userName: this.state.userName,
                    email: this.state.email,
                    password: this.state.password
                  }
                   this.props.addUser(newUser)
                   this.props.history.push("/")
              })
            }
    })
   }

    render() {
        return (
            <React.Fragment>
                <p>REGISTER</p>
                <form>
                    <div>
                        <label htmlFor="UserName"> UserName: </label>
                            <input type="text" required onChange={this.handleFieldChange} id="userName" placeholder="Enter username Here" />
                    </div>
                    <div>
                        <label htmlFor="Email">Email:</label>
                            <input type="text" required onChange={this.handleFieldChange} id="email"/>
                    </div>
                    <div>
                        <label htmlFor="Password">Password:</label>
                            <input type="text" required onChange={this.handleFieldChange} id="password"/>
                    </div>
                    <button type="submit" onClick={this.getAllUsers}> Register a new account. </button>
                </form>
            </React.Fragment>
        )
}
    }