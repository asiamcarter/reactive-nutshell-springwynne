import React, { Component } from 'react'

export default class MessagesAddMessage extends Component {
  render() {
    return(
      <>
      <input type="text" placeholder="New Message" />
      <button>Send</button>
      </>
    )
  }
}