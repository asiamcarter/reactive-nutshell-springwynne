import React, { Component } from 'react'


export default class MessageEditButton extends Component {

  render() {
    let userId = 1;
    if (userId !== this.props.message.userId) {
      return null
    }
    return(
      <a onClick={()=> this.props.messageToEdit(this.props.message.id)}
        className={`edit-message-${this.props.message.id}`}>edit</a>
    )
  }
}