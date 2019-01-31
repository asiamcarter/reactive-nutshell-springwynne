import React, { Component } from 'react'
import MessageEditButton from './MessageEditButton'
import MessageSaveEdit from './MessageSaveEdit'

export default class MessagesCard extends Component {

  render() {

    let userId = Number(sessionStorage.getItem("User"));
    console.log("this is friends from user database",this.props.friends)

     let isThisAFriend = this.props.friends.find(friends => friends.id === this.props.message.userId) || null
    console.log(isThisAFriend)

    let isSelf = (userId === this.props.message.userId) ? true : false;

    let itIsNotAFriend = false
    if (isThisAFriend === null) {
      itIsNotAFriend = true
    }

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
    if (isSelf) {
      return(
      <section className={`${useris}-message`}>
      <h5 className="message-not-a-friend">{personIs.userName}</h5>
      <p id={`message-${this.props.message.id}`}>{this.props.message.message} <br/>
      <MessageEditButton message={this.props.message}
          history={this.props.history}
          messageToEdit={this.props.messageToEdit} /></p>
      </section>
      )
    } else  if (itIsNotAFriend) {
      return(
        <section className={`${useris}-message`}>
        <a onClick={()=> this.props.addFriend(addFriendObject)} ><h5 className="message-not-a-friend">{personIs.userName}</h5></a>
        <p id={`message-${this.props.message.id}`}>{this.props.message.message} <br/>
        {/* <MessageEditButton message={this.props.message}
            history={this.props.history}
            messageToEdit={this.props.messageToEdit}  /> */}
            </p>
        </section>
      )
      } else {
      return(
              <section className={`${useris}-message`}>
      <a onClick={() => alert("already a friend")}><h5 className="message-is-a-friend">{personIs.userName}</h5></a>
      <p id={`message-${this.props.message.id}`}>{this.props.message.message} <br/>
      {/* <MessageEditButton message={this.props.message}
          history={this.props.history}
          messageToEdit={this.props.messageToEdit} /> */}
          </p>
      </section>
      )
      }
  }
}