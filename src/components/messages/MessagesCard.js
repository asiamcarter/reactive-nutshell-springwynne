import React, { Component } from 'react'
import MessageEditButton from './MessageEditButton'

export default class MessagesCard extends Component {

  render() {

    let userId = 1;
    let edit = false


    let useris ="";
    let personIs = this.props.userDatabase.find(user => user.id === this.props.userId)
    if (userId === this.props.userId) {
      useris = "user"
    } else {
      useris = "nonUser"
    }
    if (edit) {
      return(
              <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <input/>
      <MessageEditButton message={this.props.message}
          history={this.props.history}
          messageToEdit={this.messageToEdit} />
      </section>
      )
    }
    return(
      <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <p id={`message-${this.props.message.id}`}>{this.props.message.message}</p>
      <MessageEditButton message={this.props.message}
          history={this.props.history} />
      </section>
    )
  }
}