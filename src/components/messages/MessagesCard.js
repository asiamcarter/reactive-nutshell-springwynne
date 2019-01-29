import React, { Component } from 'react'

export default class MessagesCard extends Component {
  render() {
    return(
      <>
      <h5>User</h5>
      <p>{this.props.message}</p>
      </>
    )
  }
}