import React, { Component } from 'react'

export default class MessageEditButton extends Component {

  render() {
    let userId = 1;
    if (userId !== this.props.message.userId) {
      return null
    }
    return(
      <button className={`edit-message-${this.props.message.id}`}>edit</button>
    )
  }
}