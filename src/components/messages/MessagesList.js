import React, { Component } from 'react'
import MessagesCard from './MessagesCard'
import MessagesAddMessage from './MessagesAddMessage'

export default class MessagesList extends Component {
  render() {



    if (this.props.messages.length === 0 ||  this.props.users.length === 0) {
      return null
    }
    return(
      <>
      <h1>Messages</h1>
      <section className="message-container">
        {
      this.props.messages.map( message =>
      <MessagesCard key={message.id}
        message={message}
        userId={message.userId}
        history={this.props.history}
        userDatabase={this.props.users} />
      )
        }
        <MessagesAddMessage
        addMessage={this.props.addMessage} />
      </section>
      </>
    )
  }
}
