import React, { Component } from 'react'
import MessagesCard from './MessagesCard'
import MessagesAddMessage from './MessagesAddMessage'

export default class MessagesList extends Component {
  render() {

    // this.props.users
    // this.props.messages
    return(
      <>
      <h2>Messages</h2>
      <section className="message-container">
        {
      this.props.messages.map( message =>
      <MessagesCard key={message.id}
        message={message}
        userId={message.userId}
        userDatabase={this.props.users} />
      )
        }
        <MessagesAddMessage />
      </section>
      </>
    )
  }
}
