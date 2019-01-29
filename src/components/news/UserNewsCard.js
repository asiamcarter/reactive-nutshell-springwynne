import React, { Component } from 'react'
import RemoveUserArticleButton from './RemoveUserArticleButton'

export default class UserNewsCard extends Component {
  render() {
    return(
      <>
      <div key={this.props.newsArticle.id}>
        <h4>{this.props.newsArticle.title}</h4>
        <RemoveUserArticleButton
        deleteNewsArticle={this.props.deleteNewsArticle}
        newsArticle={this.props.newsArticle} />
        <hr></hr>
      </div>
      </>
    )
  }
}