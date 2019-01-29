import React, { Component } from 'react'

export default class RemoveUserArticleButton extends Component {
  render() {
    return(
      <button onClick={() => this.props.deleteNewsArticle(this.props.newsArticle.id, "newsItems")}>Remove Article</button>
    )
  }
}