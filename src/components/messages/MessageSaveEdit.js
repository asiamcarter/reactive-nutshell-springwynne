import React, { Component } from 'react'

export default class MessageSaveEdit extends Component {
  state = {
    message: this.props.message.message,
    timeStamp: this.props.message.timeStamp,
    userId: this.props.message.userId,
    id: this.props.message.id
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

  constructNewMessage = evt => {
    const messageEdited = {
      message: this.state.message,
      timeStamp: this.state.timeStamp,
      userId: this.state.userId,
      id: this.state.id
    }
    this.props.messageToEdit(0)
    this.props.putMessage(this.state.id, messageEdited)
  }

  render() {

    return(
      <>
      <input type="text" required id={"message"} value={this.state.message} onChange={this.handleFieldChange} />
      <button type="submit" onClick={this.constructNewMessage} >Save</button>
      </>
    )
  }
}