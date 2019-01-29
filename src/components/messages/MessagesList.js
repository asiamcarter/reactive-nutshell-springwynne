import React, { Component } from 'react'
import MessagesCard from './MessagesCard'

export default class MessagesList extends Component {
  render() {
    console.log(this.props.embedded)
    return(
      <>
      <h2>Messages</h2>
      <section>
        {
      this.props.messages.map( message =>
      <MessagesCard key={message.id} message={message.message} {...this.props} />
      )
        }
      </section>
      </>
    )
  }
}

// TODO: