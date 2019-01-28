import React, { Component } from 'react'

export default class NewsList extends Component {
  render() {
    return(
      <>
        {console.log(this.props.state.news)}
      </>
    )
  }
}