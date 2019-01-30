import React, { Component } from 'react'
import MessageEditButton from './MessageEditButton'

export default class MessagesCard extends Component {

  render() {

    let userId = 1;
    let edit = true;
    let messageToEdit = 0

     messageToEdit = (messageId) => {
      console.log(messageId, userId)
      messageToEdit = messageId
    }

    let useris ="";
    let personIs = this.props.userDatabase.find(user => user.id === this.props.userId)
    if (userId === this.props.userId) {
      useris = "user"
    } else {
      useris = "nonUser"
    }
    if (messageToEdit === this.props.message.id) {
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
          messageToEdit={messageToEdit} />
      </section>
    )
  }
}