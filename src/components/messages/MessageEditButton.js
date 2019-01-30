import React, { Component } from 'react'

export default class MessageEditButton extends Component {

  render() {
    let userId = 1
    console.log(this.props.user)
    if (userId !== this.props.user) {
      return null
    }
    return(
      <button>edit</button>
    )
  }
}