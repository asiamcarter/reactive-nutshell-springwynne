import React, { Component } from 'react'
import MessagesCard from './MessagesCard'
import MessagesAddMessage from './MessagesAddMessage'

export default class MessagesList extends Component {

  state = {
    num: 0,
  }
  render() {
    let userId = 1
    let edit = true;


     const messageToEdit = (messageId) => {
      console.log(messageId, userId)
      this.setState({num: messageId})

    }


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
        userDatabase={this.props.users}
        messageToEdit={messageToEdit}
        num={this.state.num} />
      )
        }
        <MessagesAddMessage
        addMessage={this.props.addMessage} />
      </section>
      </>
    )
  }
}
