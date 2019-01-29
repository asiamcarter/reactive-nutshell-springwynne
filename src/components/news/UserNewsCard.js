import React, { Component } from 'react'
import RemoveUserArticleButton from './RemoveUserArticleButton'

export default class UserNewsCard extends Component {
  render() {
    return(
      <>
      <div>
        <a href={this.props.newsArticle.url}>
        <h4>{this.props.newsArticle.title}</h4>
        </a>
        <p>{this.props.newsArticle.synopsis}</p>
        <RemoveUserArticleButton
        deleteNewsArticle={this.props.deleteNewsArticle}
        newsArticle={this.props.newsArticle} />
        <hr></hr>
      </div>
      </>
    )
  }
}