import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Login extends Component {

    state = {
        userName: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange= {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    };

    onLogin = (evt) =>
    {evt.preventDefault()
    this.props.registerHere(this.state.userName, this.state.password)
            .then(allUsers => {
                // console.log(allUsers)
                    allUsers.forEach(users=> {
                        let loggedIn= false;
                        sessionStorage.setItem("User", users.id);
                        let sessionUser = sessionStorage.getItem("User")
                        if (this.state.userName === users.userName && this.state.password === users.password) {
                            loggedIn= true;
                        }
                        if (loggedIn=== true){
                            this.props.history.push("/")
                        }
                    })
                })
            }

    render() {
        return (
            <React.Fragment>
                <p>LOGIN</p>
                    <form>
                        <div>
                            <label htmlFor="UserName"> UserName: </label>
                             <input type="text" required onChange={this.handleFieldChange} id="userName" />
                        </div>
                        <div>
                            <label htmlFor="Password">Password:</label>
                             <input type="text" required onChange={this.handleFieldChange} id="password"/>
                        </div>
                        <button type="submit" onClick={this.onLogin}> Submit </button>
                        <p>Not a User? <Link to="/register">Register Here</Link></p>
                    </form>
            </React.Fragment>
        )
    }
}