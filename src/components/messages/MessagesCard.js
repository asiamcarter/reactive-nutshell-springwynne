import React, { Component } from 'react'
import MessageEditButton from './MessageEditButton'

export default class MessagesCard extends Component {

  render() {

    let userId = 1;
    console.log("messageIdForEditing",this.props.messageIdForEditing)

    let useris ="";
    let personIs = this.props.userDatabase.find(user => user.id === this.props.userId)
    if (userId === this.props.userId) {
      useris = "user"
    } else {
      useris = "nonUser"
    }
    if (this.props.messageIdForEditing === this.props.message.id) {
      return(
      <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <input/>
      </section>
      )
    }
    return(
      <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <p id={`message-${this.props.message.id}`}>{this.props.message.message}</p>
      <MessageEditButton message={this.props.message}
          history={this.props.history}
          messageToEdit={this.props.messageToEdit} />
      </section>
    )
  }
}