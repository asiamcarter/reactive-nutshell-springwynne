import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <p>LOGIN</p>
                    <form>
                        <div>
                            <label htmlFor="Task"> UserName: </label>
                             <input type="text" required onChange={this.handleFieldChange} id="task" placeholder="userName" />
                        </div>
                        <div>
                            <label htmlFor="Completion Date">Password:</label>
                             <input type="text" required onChange={this.handleFieldChange} id="userPassword"/>
                        </div>
                        <button type="submit" onClick={()=>{this.props.history.push("/")}}> Submit </button>
                        <p>Not a User? <Link to="/register">Register Here</Link></p>
                    </form>
            </React.Fragment>
        )
    }
}