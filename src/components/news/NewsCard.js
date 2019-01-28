import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class NewsCard extends Component {
  render() {
    return(
      <>
      <div key={this.props.newsArticle.id}>
        <h4>{this.props.newsArticle.title}</h4>
        <button>Save News Article</button>
        <hr></hr>
      </div>
      </>
    )
  }
}