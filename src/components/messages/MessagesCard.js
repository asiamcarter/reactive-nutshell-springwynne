import React, { Component } from 'react'
import MessageEditButton from './MessageEditButton'
import MessageSaveEdit from './MessageSaveEdit'

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

    const addFriendObject = {
      userId: userId,
      otherFriendId: personIs.id,
    }

    if (this.props.messageIdForEditing === this.props.message.id) {
      return(
      <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <MessageSaveEdit
     message={this.props.message}
     messageIdForEditing={this.props.messageIdForEditing}
     putMessage={this.props.putMessage}
     messageToEdit={this.props.messageToEdit} />
      </section>
      )
    }
    return(
      <section className={`${useris}-message`}>
      <a onClick={()=> this.props.addFriend(addFriendObject)} ><h5>{personIs.userName}</h5></a>
      <p id={`message-${this.props.message.id}`}>{this.props.message.message} <br/>
      <MessageEditButton message={this.props.message}
          history={this.props.history}
          messageToEdit={this.props.messageToEdit} /></p>
      </section>
    )
  }
}