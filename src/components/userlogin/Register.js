import React, { Component } from "react"
// import { Link } from "react-router-dom"

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
    };

    buildNewUser = evt => {
        evt.preventDefault();
        const user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        this.props.addUser(user)
        .then(()=> {
            console.log("user:", user)
            this.props.registerHere(user.userName, user.password)
            .then(allUsers => {
                // console.log(allUsers)
                    allUsers.forEach(users=> {
                        let loggedIn= false;
                        sessionStorage.setItem("User", users.id);
                        let sessionUser = sessionStorage.getItem("User")
                        console.log(user, sessionUser)
                        if (user.userName === users.userName && user.password === users.password) {
                            loggedIn= true;
                        }
                        if (loggedIn=== true){
                            this.props.history.push("/")
                        }
                    })
                })
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
                    <button type="submit" onClick={this.buildNewUser}> Register a new account. </button>
                </form>
            </React.Fragment>
        )
    }
}