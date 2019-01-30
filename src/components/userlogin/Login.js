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

    onLogin = (evt) => {
    evt.preventDefault();
    this.props.registerHere(this.state.userName, this.state.password)
        .then(allUsers => {
            if(allUsers.length < 1) {
                alert("We can't seem to find you! Try registering below")
            } else {
                allUsers.forEach(user => {
                    let loggedIn= false;
                    if (this.state.userName === user.userName && this.state.password === user.password) {
                            loggedIn= true;
                        }
                    if (loggedIn === true){
                        sessionStorage.setItem("User", user.id);
                        let sessionId= sessionStorage.getItem("User")
                        console.log(sessionId)
                        this.props.history.push("/");
                    }
                })
            }
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