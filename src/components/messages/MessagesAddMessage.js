import React, { Component } from 'react'

export default class MessagesAddMessage extends Component {

  state = {
    userId: 1,
    message: "",
    timeStamp: new Date()
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

  addNewMessage = evt => {
    evt.preventDefault()
        const newMessage = {
            userId: this.state.userId,
            message: this.state.message,
            timeStamp: new Date()
        }

        // Create the newMessage and redirect user to newMessage list
        this.props.addMessage("messages", newMessage);
  }

  render() {
    return(
      <>
      <input type="text"
        placeholder="New Message"
        onChange={this.handleFieldChange}
        id="message" />
      <button type="submit" onClick={this.addNewMessage} >Send</button>
      </>
    )
  }
}