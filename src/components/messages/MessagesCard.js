import React, { Component } from 'react'

export default class MessagesCard extends Component {
  render() {
    let userId = 1;
    let useris ="";
    let personIs = this.props.userDatabase.find(user => user.id === this.props.userId)
    console.log(personIs.id)
    if (userId === this.props.userId) {
      useris = "user"
    } else {
      useris = "nonUser"
    }
    return(
      <section className={`${useris}-message`}>
      <h5>{personIs.userName}</h5>
      <p>{this.props.message.message}</p>
      </section>
    )
  }
}